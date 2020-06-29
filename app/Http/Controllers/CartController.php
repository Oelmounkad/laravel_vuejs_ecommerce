<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cart;
class CartController extends Controller
{
    public function index(){
        $carts = Cart::all();
        return response()->json($carts);
    }
    public function getCartsOfUser($user_id){
        $carts = Cart::where('user_id',$user_id)->get();
        return response()->json($carts);
    }
    
}
