<?php
    include("includes/config.php");
    header("content-type: application/json");

    $query = $conn->query("SELECT * FROM products");
    $query->execute();

    print( json_encode($query->fetchALL(PDO::FETCH_ASSOC)) );
?>