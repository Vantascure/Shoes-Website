<?php
$servername = "127.0.0.1"; 
$username = "root"; 
$password = ""; 

$handler = mysqli_connect($servername, $username, $password);

if(!$handler){
    die("Connection Failed: " . mysqli_connect_error());
}

mysqli_query($handler, 'CREATE DATABASE ShoeX_db');

?>