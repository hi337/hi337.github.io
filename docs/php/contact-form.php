<?php 
if(!isset($_POST["full-name"]) || !isset($_POST["email"]) || !isset($_POST["message"])) {
    echo "Input Invalid. Please try again.";
}

$message = "Full Name: " .  $_POST["full-name"] . "\n" . "Email: " . $_POST["email"] . "\n" . "Message: " . $_POST["message"];

mail("ratebajamieh@hotmail.com", "Message from your personal website", $message)
?>