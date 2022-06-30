<?php
    header("content-type: application/json");

    print(json_encode(array(
        "key1" => "Hello,", 
        "key2" => "World!",
        "fetchKey1" => isset($_POST["coolKey"]) ? $_POST["coolKey"] : "No Data"
    )));
?>