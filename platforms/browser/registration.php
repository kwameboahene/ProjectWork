<?php
    $fname = $lname =   $gender = $email = $password = "";
    
    
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = test_input($_POST["name"]);
        $phone = test_input($_POST["phonenumber"]);
        $gender = test_input($_POST["gender"]);
        $email = test_input($_POST["email"]);
        $password = test_input($_POST["password"]);
        
    }
    
    
    
    
    
    $host = "35.166.18.143";
    $dbname = "webtech_kwame_boahene";
    $username = "kwame.boahene";
    $pass = "kwame.boahene";
    
    
    
    
    $conn = new mysqli($host, $username, $pass, $dbname);
    
    
    if ($conn) {
        //echo "Connected successfully";
    }
    
    
    else {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    
    
    
    
    if ($conn -> query("use webtech_kwame_boahene") === TRUE) {
        //echo "Using database successfully";
    } else {
        // echo "Error using database: " . $conn->error;
    }
    
    
    
    
    $sql ="INSERT INTO User(Name,Phone,Gender,Email,Password) values ('$name','$phone','$gender','$email','$password');
    ";
    
    if ($conn -> query($sql) === TRUE) {
        //  echo "inserting into table successfully";
        echo "success";
        
        
    }
    else {
        //  echo "Error insertion into database:" . $conn->error;
    }
    
    
    

    
    
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    
    
    ?>
