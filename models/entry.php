<?php
    header("content-type: application/json");

    print(json_encode(array(
        "key1" => "Hello,", 
        "key2" => "World!",
        "productId" => isset($_POST["productId"]) ? $_POST["productId"] : "No Data"
    )));
?>