<?php

namespace App;

use App\Episodio;
use App\Temporada;
use Illuminate\Database\Eloquent\Model;

class Serie extends Model
{
    public $timestamps = false;
    protected $fillable = ['nome'];


    public function temporadas()
    {
        return $this->hasMany(Temporada::class);
    }

    public function episodios()
    {
        return $this->hasMany(Episodio::class);
    }
}