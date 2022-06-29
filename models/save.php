<?php
    header("content-type: application/json");

    $content = json_decode( trim(file_get_contents("php://input")), true );

    print(json_encode(array(
        "key1" => "Hello,", 
        "key2" => "World!",
        "fetchKey1" => $content["coolKey"]
    )));
?>