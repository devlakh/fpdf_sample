<?php
    include("includes/config.php");
    header("content-type: application/json");
    extract($_POST);

    $query = $conn->prepare("INSERT INTO entries (customer_name, product_id, quantity, unit_price, total) VALUES (:name, :product, :quantity, :price, :total)");
    // $query = $conn->prepare("INSERT INTO(customer_name, productId, quantity) VALUES (:name, :product, :quantity)");

    $query->bindParam(":name", $name);
    $query->bindParam(":product", $product);
    $query->bindParam(":quantity", $quantity);
    $query->bindParam(":price", $price);
    $query->bindValue(":total", ((int)$quantity * (int)$price));
    
    try
    {
        if($query->execute()) print(json_encode(array("code"=>0, "description"=>"Success")));
        else print(json_encode(array("code"=>-1, "description"=>"Query Failed")));
    }
    catch(PDOException $e)
    {
        print(json_encode(array("code"=>-2, "description"=>$e)));
    }
?>