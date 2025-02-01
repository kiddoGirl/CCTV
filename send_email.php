<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $address = htmlspecialchars($_POST['address']);

    // Recipient email address
    $to = "your-email@example.com"; // Change this to the email address where you want to receive form submissions

    // Email subject
    $subject = "New Form Submission";

    // Email content
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

    // Set content-type header for HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";

    // Additional headers
    $headers .= "From: no-reply@yourdomain.com" . "\r\n"; // Customize this header
    $headers .= "Reply-To: $email" . "\r\n"; // Reply-To address

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Form submitted successfully.";
    } else {
        echo "There was an issue with your submission. Please try again.";
    }
}
?>
