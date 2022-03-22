<?php
$mail = $_POST['email'];
$message = 'Um familiar y/o amigo nos dio tu correo para poder invitarte a que nos visites. www.losroperos.com'

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'javier.santoyo@yahoo.com';
$asunto = 'Mensaje de los roperos';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:home.ejs");
?>