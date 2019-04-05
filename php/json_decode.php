<?php
// ambil data
$contents = file_get_contents('../json/coba.json');
// ubah standar encoding
$contents = utf8_encode($contents);
// ubah json ke array assosiatif
$result = json_decode($contents, true);
var_dump($result);
?>