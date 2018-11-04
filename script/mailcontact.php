<?php
  // echo json_encode('entra en el php');

  $to = "";
  $subject = "";
  $name = $_POST["name"];
  $lastname = $_POST["lastname"];  
  $email = $_POST["email"];
  $phone = $_POST["tel"];
  $company = $_POST["company"];
  $website = $_POST["website"];
  $texto = $_POST["howcan"];


  $message = "Name: $name \n";
  $message.= "LastName: $lastname \n";
  $message.= "Email: $email \n";
  $message.= "Phone: $phone \n";
  $message.= "Company: $company \n";
  $message.= "Website: $website \n";
  $message.= "\nMessage: $texto \n";

  
  $header = "From: no-reply < no-reply@example.com >\r\n"; 
  $header.= "X-Sender: no-reply < no-reply@example.com >\n";
  $header.= 'X-Mailer: PHP/' . phpversion();
  $header.= "MIME-Version: 1.0\r\n"; 
  $header.= "Content-Type: text/plain; charset=utf-8\r\n"; 
  $header.= "X-Priority: 1\r\n"; 
  
  if(mail($to, $subject, $message, $header)){
    echo json_encode('1');
  }else{
    echo json_encode('0');
  }  
?>
