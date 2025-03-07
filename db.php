<?php

@define('DB_SERVER', 'localhost');
@define('DB_USERNAME', 'u820100908_upsglobalship');
@define('DB_PASSWORD', 'upsglobalship@A1');
@define('DB_NAME', 'upsglobalshipu820100908_upsglobalship');


/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if ($link === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

?>