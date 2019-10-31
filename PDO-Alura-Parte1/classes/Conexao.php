<?php

class Conexao
{
    public static function pegarConexao()
    {
        $conexao = new PDO(DB_DRIVER . ':host=' . DB_HOSTNAME . ';dbname=' . DB_NAME, DB_USERNAME, DB_PASSWORD);
        $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conexao;
    }
}