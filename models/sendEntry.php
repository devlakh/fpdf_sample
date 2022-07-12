<?php
    include("includes/config.php");
    header("content-type: application/json");
    extract($_POST);

    $query = $conn->query("INSERT INTO(customer_name, productId, quantity, unit_price, total) VALUES (:name, :product, :quantity, :price, :total)");
    $query->bindParam(":name", $name);
    $query->bindParam(":product", $product);
    $query->bindParam(":quantity", $quantity);
    $query->bindParam(":price", $price);
    $query->bindValue(":total", ((int)$quantity * (int)$price));
    
    //---------------------TODO
    // try
    // {
    //     if($query->execute()) print(0);
    // }
    // catch()
    // {

    // }
?>