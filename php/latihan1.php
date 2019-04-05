<?php
$dbh = new PDO('mysql:host=localhost;dbname=ci','root','');
$db = $dbh->prepare('SELECT * FROM user');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

// array > json
$data = json_encode($mahasiswa);
echo $data;