<?php

namespace App\Services;

use App\Serie;
use App\Episodio;
use App\Temporada;
use Illuminate\Support\Facades\DB;

class RemovedorDeSerie  
{
    public function removerSerie(int $serieId) : string
    {
        $nomeSerie = '';
        DB::transaction(function () use ($serieId, &$nomeSerie) {
            $serie = Serie::find($serieId);
            $nomeSerie = $serie->nome;

            $this->removerTemporadas($serie);
        });

        return $nomeSerie;
    }

   

    public function removerTemporadas(Serie $serie): void
    {
        $serie->temporadas->each(function (Temporada $temporada) {
            $this->removerEpisodios($temporada);
            $temporada->delete();
        });
    }

    public function removerEpisodios(Temporada $temporada): void
    {
        $temporada->episodios->each(function (Episodio $episodio) {
            $episodio->delete();
        });
    }

}
