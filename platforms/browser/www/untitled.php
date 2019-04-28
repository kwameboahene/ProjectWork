<?php

    $email = "";
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST["email"];
        $products = $_POST["products"];

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


$arr = array();

$sql ="Select * from Cart where Email='$email'";


$result = $conn->query($sql);



$numRows = $result->num_rows;



if ( $numRows> 0) {

while ($row = $result->fetch_assoc()) {

    $arr[] = $row["Name"];
    $arr[] = $row["Brand"];
    $arr[] = $row["Model"];
    $arr[] = $row["Year"];
    $arr[] = $row["Price"];


}

}

echo json_encode($arr);











function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  

?>
