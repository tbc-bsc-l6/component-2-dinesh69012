<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{

    public function index(){
        $order = Order::all();
        return response()->json(['orders'=>$order],200);
    }

    public function getOrdersByTraderId($id)
    {
        try {
            $orders = Order::where('trader_id', $id)->get();

            // Check if orders were found
            if ($orders->isEmpty()) {
                return response()->json(['message' => 'No orders found for the specified trader_id'], 404);
            }

            return response()->json(['orders' => $orders], 200);
        } catch (\Exception $e) {
            // Log exception
            \Log::error('Error getting orders: ' . $e->getMessage());
            // Failed to get orders
            return response()->json(['error' => 'Failed to get orders'], 500);
        }
    }

    public function store(Request $request){
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'contact' => 'required|string|max:255',
            'customer_id' => 'required|integer',
            'pet_id' => 'required|integer',
            'trader_id' => 'required|integer',
        ]);


        try {
            \Log::info('Before order creation');
            $order = Order::create([
                'name' => $validatedData['name'],
                'address' => $validatedData['address'],
                'contact' => $validatedData['contact'],
                'customer_id' => $validatedData['customer_id'],
                'pet_id' => $validatedData['pet_id'],
                'trader_id' => $validatedData['trader_id'],
            ]);
            \Log::info('After order creation');


            // Order created successfully
            return response()->json(['message' => 'Order created successfully'], 200);
        } catch (\Exception $e) {
            // Log exception
            \Log::error('Error creating order: ' . $e->getMessage());
            // Failed to create order
            return response()->json(['error' => 'Failed to create order'], 500);
        }



    }
}
