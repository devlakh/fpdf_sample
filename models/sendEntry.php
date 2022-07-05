<?php
    header("content-type: application/json");
    extract($_POST);

    print(json_encode(array(
        "name" => $name
        ,"product" => $product
        ,"quantity" => $quantity
        ,"price" => $price
    )));
?>