<?php
$data = [
	"a" => 0,
	"b" => 1
];

// echo $data[b];
// echo '<br>json_encode<br>';
$data = json_encode($data);
echo $data;
?>