<?php
$data = file_get_contents('../json/coba.json');
// json > array
$res = json_decode($data, true);

var_dump($res);