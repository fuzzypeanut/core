<?php
require_once '../vendor/autoload.php';


$config = ['settings' => [
    'addContentLengthHeader' => false,
]];
$app = new \Slim\App($config);

// Define app routes
$app->get('/hello/{name}', function ($request, $response, $args) {
    return $response->write("Hello " . $args['name']);
});

$app->get('/samplejson', function () {
    $json = (array) simplexml_load_file('http://shoggoth.net/?feed=rss2');
    return json_encode($json);
});

$app->get('/info', function () {
    phpinfo();
    return null;
});

$app->get('/', function (){
    return file_get_contents('../templates/index.html');
});

// Run app
$app->run();
