<?php

//Render Views
//For Displaying HTML pages
function render($view)
{
    $path = "views/". $view . ".html";
    if(file_exists($path)) require($path);
}

//Load Data Models
//For Loading PHP Files to Process Data
function load($model, $data = array())
{
    $path = "models/" . $model . ".php";
    if(file_exists($path))
    {
        extract($data);
        require($path);
    }
}

?>