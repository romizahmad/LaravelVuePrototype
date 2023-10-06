<?php

use App\Http\Controllers\API\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('index', [HomeController::class, 'index']);
Route::get('warehouse', [HomeController::class, 'warehouse']);
