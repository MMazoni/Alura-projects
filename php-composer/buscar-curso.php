<?php

require 'vendor/autoload.php';
require 'src/Buscador.php';

use GuzzleHttp\Client;
use Alura\BuscadorDeCursos\Buscador;
use Symfony\Component\DomCrawler\Crawler;


$client = new Client();
$crawler = new Crawler();

$buscador = new Buscador($client, $crawler);
$cursos = $buscador->buscar('https://alura.com.br/formacao-desenvolvedor-php');

foreach ($cursos as $curso) {
    echo $curso->textContent;
}
