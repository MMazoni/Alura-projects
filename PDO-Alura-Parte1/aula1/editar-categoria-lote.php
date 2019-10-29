<?php 

require_once 'classes/Categoria.php';

$categoria = new Categoria();
$lista = $categoria->listar();
foreach($lista as $linha){
    $novo = new Categoria($linha['id']);
    $novo->nome = "Categoria " . $linha['nome'];
    $novo->atualizar();
}

$nova_lista = $categoria->listar();
echo '<pre>';
print_r($nova_lista);
echo '</pre>';
