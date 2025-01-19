<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>OTP Email Verification - Awesome Petstore</title>
    <style>
        body {
            font-family: sans-serif;
            background-color: #1a202c;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #1a201c;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .header {
            text-align: left;
            color: #ff8c00; /* Orange color */
        }

        .otp-section {
            margin-top: 30px;
            color: #ffffff;
        }

        .additional-text {
            margin-top: 20px;
            color: #ccc6c7;
        }

        .button-section {
            text-align: center;
            margin-top: 20px;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #ff8c00;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        .button:hover {
            background-color: #ff6f00; /* Darker shade of orange on hover */
        }

        .footer {
            display: flex;
            flex-direction: column;
            align-items: end;
            color: #ccc6c7;
            font-size: 12px;
        }

        @media screen and (max-width: 600px) {
            .container {
                margin: 10px;
                padding: 10px;
            }
            .button {
                padding: 8px 16px;
            }
        }
    </style>
</head>
<body>
<div class="container">
    <div class="header">
        <h2>Awesome Petstore</h2>
    </div>
    <hr>
    <div class="otp-section">
        <p>Hi {{ $name }},</p> <!-- Use server-side template engine syntax to insert the user's name -->
    </div>
    <div class="additional-text">
        <p>Thanks for registering with us. Buy your desired pet with Awesome Petstore. Your OTP code is attached below. Use the following OTP code to complete the signup. The OTP is valid for 15 minutes.</p>
    </div>
    <div class="button-section">
        <p class="button">{{ $otp }}</p> <!-- Display the OTP in a button (optional) -->
    </div>
    <hr>
    <div class="footer">
        <p>Awesome PetStore</p>
        <p>All rights reserved</p>
    </div>
</div>
</body>
</html>
