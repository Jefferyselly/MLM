<?php
$host = "localhost";
$username = "root";
$password = "";

$conx = new mysqli($host, $username, $password);

// Check for Connection Error
if ($conx->connect_errno){
    echo " Failed to connect to mysql:" . $conx->connect_error;
}
error_reporting(1);

// Creat Database
$db_object = "CREATE DATABASE IF NOT EXISTS `mlm_db`";
if ($conx->query($db_object) === TRUE) {
    echo "Database 'mlm_db' has been created succesfully <br />";
} else {
    echo "Problem creating Database: <br />" . $conx->error;
}

// Selecting the DB
$select_db = "USE `mlm_db`";
if ($conx->query($select_db) === TRUE){
    echo "mlm_db is now in use <br />";
}

// Create Tables
$tab_object = "CREATE TABLE IF NOT EXISTS `mlm_user` (
    `id` bigint(50) NOT NULL AUTO_INCREMENT,
    `fullname` varchar(255) NOT NULL,
    `username` varchar(100) NOT NULL,
    `user_pass` varchar(255) NOT NULL,
    `user_email` varchar(200) NOT NULL,
    `user_phone` varchar(100) NOT NULL,
    `user_photo` varchar(100) NOT NULL,
    `user_status` varchar(50) NOT NULL,
    `user_reg_date` datetime NOT NULL,
    PRIMARY KEY (`id`)
  )";

if ($conx->query($tab_object) === TRUE){
    echo "Table 'mlm_user' has been created succesfully <br />";
} else {
    echo "error creating table mlm_user: <br />" . $conx->error;
}

$conx->close();

?>