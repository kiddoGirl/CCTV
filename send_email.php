<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $address = htmlspecialchars($_POST['address']);

 
    $to = "your-email@example.com"; 


    $subject = "New Form Submission";


    $message = "
    <html>
    <head>
        <title>Form Submission</title>
    </head>
    <body>
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Phone Number:</strong> $phone</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Address:</strong> $address</p>
    </body>
    </html>
    ";


    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";


    $headers .= "From: no-reply@yourdomain.com" . "\r\n"; 
    $headers .= "Reply-To: $email" . "\r\n"; 


    if (mail($to, $subject, $message, $headers)) {
        echo "Form submitted successfully.";
    } else {
        echo "There was an issue with your submission. Please try again.";
    }
}
?>
