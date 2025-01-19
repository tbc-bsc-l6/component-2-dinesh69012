<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wishlist;

class WishlistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $wishlist = Wishlist::all();
        return response()->json(["wishlist"=>$wishlist],200);
        //
    }

    public function getByuserId($userId){
        $wishlist = Wishlist::where('user_id',$userId)->get();
        return response()->json(["wishlist" => $wishlist], 200);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function addToWishlist(Request $request)
    {
        $userId = $request->input('user_id');
        $petId = $request->input('pet_id');

        // Check if the pet already exists in the user's wishlist
        $existingWishlistItem = Wishlist::where('user_id', $userId)
            ->where('pet_id', $petId)
            ->first();

        if ($existingWishlistItem) {
            // Pet already exists in the user's wishlist
            return response()->json(["message" => "Pet already exists in the wishlist"], 400);
        }

        // Add the pet to the user's wishlist if it doesn't exist
        $wishlistItem = Wishlist::create([
            'user_id' => $userId,
            'pet_id' => $petId,
        ]);

        return response()->json(["message" => "Pet added to wishlist", "wishlist_item" => $wishlistItem], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $deleted = Wishlist::destroy($id);

        if ($deleted === 0) {
            return response()->json(["message" => "Wishlist item not found or not deleted"], 404);
        }
        return response()->json(["message" => "Wishlist item removed successfully"], 200);
    }
}
