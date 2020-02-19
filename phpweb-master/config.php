<?php

$mysql = new mysqli('127.0.0.1', 'root', 'm1510827', 'blog');
$mysql->set_charset('utf8');

if ($mysql == FALSE) {
    echo 'Banco desconectado';
}