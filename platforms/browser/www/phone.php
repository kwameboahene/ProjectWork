<?php
$eml = $password = "";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = test_input($_POST["email"]);



    

}




$host = "35.166.18.143";
$dbname = "webtech_kwame_boahene";
$username = "kwame.boahene";
$pass = "kwame.boahene";



$conn = new mysqli($host, $username, $pass, $dbname);


if ($conn) {
 // echo "Connected successfully";
}


else {
// die("Connection failed: " . mysqli_connect_error());
 }


$arr = array();

 if ($conn -> query("use webtech_kwame_boahene") === TRUE) {
   // echo "Using database successfully";
} else {
  // echo "Error using database: " . $conn->error;
}

$sql = "SELECT Phone FROM User where Email='$email'";


if ($conn -> query($sql) === TRUE) {
//echo "pulled from DB";
} 

else {
// echo "Error pulling from DB:" . $conn->error;
}


$result = $conn->query($sql);


$numRows = $result->num_rows;

if ( $numRows> 0) {

while ($row = $result->fetch_assoc()) {

    $arr[] = $row["Phone"];

         }
  
}











function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  


?>