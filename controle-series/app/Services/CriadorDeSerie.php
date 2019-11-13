<?php

namespace App\Services;

use App\Serie;
use App\Temporada;
use Illuminate\Support\Facades\DB;

class CriadorDeSerie
{
    public function criarSerie(string $nome, int $qtdTemporada, int $epPorTemporada): Serie
    {
        DB::beginTransaction();
        $serie = Serie::create(['nome' => $nome]);    
        $this->criarTemporadas($qtdTemporada, $epPorTemporada, $serie);
        DB::commit();
    
        return $serie;
    }
    
    private function criarTemporadas(int $qtdTemporada, int $epPorTemporada, Serie $serie): void
    {
        for ($i = 1; $i <= $qtdTemporada; $i++) {
            $temporada = $serie->temporadas()->create(['numero' => $i]);
            $this->criarEpisodios($temporada, $epPorTemporada);
        }
    }

    private function criarEpisodios(Temporada $temporada, int $epPorTemporada): void
    {
        for ($j = 1; $j <= $epPorTemporada; $j++) { 
            $temporada->episodios()->create(['numero' => $j]);
        }
    }
    

}