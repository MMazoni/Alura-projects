<?php

namespace App\Http\Controllers;

class SeriesController extends Controller
{
    public function index(){
        $series = [
            'Breaking Bad',
            'Marco Polo',
            'Mr Robot',
            'Dark'
        ];

        return view('series.index', compact('series'));
    }

    public function create(){
        return view('series.create');
    }
}