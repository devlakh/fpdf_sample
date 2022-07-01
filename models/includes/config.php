<?php
    $conn = new PDO('mysql:host=localhost;dbname=shop_db', "root", "");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>