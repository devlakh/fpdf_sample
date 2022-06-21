<?php
require_once("models/includes/helpers.php");

if(isset($_GET["page"])) $page = $_GET["page"];
else $page = "default";

switch($page)
{
    case "default":
        render("input_form");
        break;

    case "createPDF":
        load("createPDF", $_POST);
        break;
}
?>