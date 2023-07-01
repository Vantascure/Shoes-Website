<?php

$servername = "127.0.0.1"; 
$username = "root"; 
$password = ""; 
$db = "shoex_db";

$handler = mysqli_connect($servername, $username, $password, $db);

if(!$handler){
    die("Connection Failed: " . mysqli_connect_error());
}else{
    echo "Connected Successfully";
    echo "<br>";
}

$the_query = "CREATE TABLE Cust_list (
    ID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    cName VARCHAR(50),
    cEmail VARCHAR(20),
    cAddress VARCHAR(75),
    )";

if (mysqli_query($handler, $the_query)) {
    echo "Table created successfully";
    } else {
    echo "Error creating table: " . mysqli_error($handler);
    }

?>