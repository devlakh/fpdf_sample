<?php
require_once("models/includes/helpers.php");

if(isset($_GET["page"])) $page = $_GET["page"];
else $page = "landing";

switch($page)
{
    case "landing":
        render("templates/head");
        render("home");
        render("templates/foot");
        break;
    
    case "entry":
        render("templates/head");
        render("entry");
        render("templates/foot");
        break;

    case "entries":
        render("templates/head");
        render("entries");
        render("templates/foot");
        break;

    case "createPDF":
        load("createPDF", $_POST);
        break;
}
?>