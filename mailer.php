      <?php
        if(isset($_POST['submit'])) {

        $to = "contact@yvvs.nl";
        $subject = "Contact";
        $name_field = $_POST['name'];
        $email_field = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $message2 = "Thank you for your email. I will contact you as soon as possible! Kind regards, Yvo";

        $body = "From: $name_field\n E-Mail: $email_field\n Subject: $subject\n Message:\n $message";

        echo "Data has been submitted to $to!";
        mail($to, $subject, $body);
        mail($email_field, $subject, $message2);

        } else {

        echo "4! OH! 4!";

        }
        ?>