<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
// if($_SERVER['SERVER_ADDR'] != $_SERVER['REMOTE_ADDR'] &&
//    $_SERVER['SERVER_ADDR'] != $_SERVER['REMOTE_ADDR']){
//   header('HTTP/1.0 403 Forbidden');
//   echo json_encode(array('errors'=>array('non-local')));
//   exit;
// }
if($_SERVER['REQUEST_METHOD'] != 'POST'){
  header('HTTP/1.0 405 Method not allowed');
  echo json_encode(array('errors'=>array('non-post')));
  exit;
}

$data = json_decode(file_get_contents('php://input'),true);
$formatErrors = array();

$toEmail = isset($data['to']) ? $data['to'] : '';
if($toEmail == '') $formatErrors[] = "No 'To Email'";
$fromEmail = isset($data['from']) ? $data['from'] : '';
if($fromEmail == '') $formatErrors[] = "No 'From Email'";
$subject = (isset($data['subject']) && $data['subject'] != '') ? $data['subject'] : 'Bazar Studios Sale';
$body = (isset($data['body']) && $data['body'] != '') ? $data['body'] : 'hello world';

if(count($formatErrors) > 0){
  header('HTTP/1.0 400 Bad request');
  echo json_encode(array('errors'=>$formatErrors));
  exit;
}

require 'advEmail.php';
$advEmail = new advEmail();
$advEmail->setMailType('html');
$advEmail->from($fromEmail, 'Bazar Studios Info');
$advEmail->to($toEmail);
$advEmail->subject($subject);
$advEmail->message($body);

if(!$advEmail->send()){
  header('HTTP/1.0 400 Bad request');
  echo json_encode(array('errors'=>$advEmail->getDebugger()));
  exit;
}else{
  header('HTTP/1.0 200 Ok');
  echo json_encode(array('to' => $toEmail, 'from' => $fromEmail, 'subject'=> $subject));
  exit;
}
