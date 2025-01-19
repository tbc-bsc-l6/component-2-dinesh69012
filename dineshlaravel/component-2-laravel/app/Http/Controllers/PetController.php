<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Models\Pet;
use Illuminate\Support\Facades\Storage;

class PetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pets = Pet::all();
        $pets->each(function ($pet) {
            $pet->image_url = $this->getImageUrl($pet->image);
        });

        return response()->json(['pets' => $pets], 200);
    }

    public function getVisiblePet()
    {
        $pets = Pet::where('isVisible', true)->get();
        $pets->each(function ($pet) {
            $pet->image_url = $this->getImageUrl($pet->image);
        });

        return response()->json(['pets' => $pets], 200);
    }

    public function getPetBySeller($id)
    {
        $pets = Pet::where('seller_id', $id)->get();
        $pets->each(function ($pet) {
            $pet->image_url = $this->getImageUrl($pet->image);
        });

        return response()->json(['pets' => $pets]);
    }

    private function getImageUrl($imageName)
    {
        // Generate a public URL for the image
        return $imageName ? asset('storage/images/' . $imageName) : null;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string',
            'category_id' => 'required|integer',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'seller_id' => 'required|integer',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Process image upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->storeAs('images', $imageName, 'public'); // Store in storage/app/public/images
            $validatedData['image'] = $imageName;
        }

        // Create a new pet record
        Pet::create($validatedData);

        return response()->json(['message' => 'Pet created successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $pet = Pet::findOrFail($id);
            $pet->image_url = $this->getImageUrl($pet->image);

            return response()->json(['pet' => $pet], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Pet not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string',
            'description' => 'sometimes|required|string',
            'price' => 'sometimes|required|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Find the pet by ID
        $pet = Pet::findOrFail($id);

        // Process image upload if provided
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->storeAs('images', $imageName, 'public'); // Store in storage/app/public/images
            $validatedData['image'] = $imageName;
        }

        // Update the pet record
        $pet->fill($validatedData)->save();

        return response()->json(['message' => 'Pet updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $pet = Pet::findOrFail($id);

            // Optionally delete the image file
            if ($pet->image) {
                Storage::disk('public')->delete('images/' . $pet->image);
            }

            $pet->delete();

            return response()->json(['message' => 'Pet deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to delete pet'], 500);
        }
    }
}
