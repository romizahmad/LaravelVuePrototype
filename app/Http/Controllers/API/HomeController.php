<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function index()
    {
        $userData = DB::table('user')->get();

        $users = json_encode($userData);

        return $users;
    }

    public function warehouse()
    {
        $warehouseData = DB::table('warehouse')->get();

        $warehouses = json_encode($warehouseData);

        return $warehouses;
    }
}
