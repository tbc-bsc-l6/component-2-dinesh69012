<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $category = Category::all();
        return response()->json(['categories'=>$category],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'category_name'=> 'required|string',
        ]);
        Category::create($validateData);
        return response()->json(['message'=>'created a successfully'],201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::find($id);
        return response()->json(['category'=>$category],200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validateData = $request->validate([
            'category_name'=>'required|string',
        ]);

        $category = Category::find($id);
        $category-> category_name = $validateData['category_name'];
        $category->save();

        return response()->json(["message"=>"Category Update a Successfully"],200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $delete = Category::destroy($id);
        if($delete=== 0) {
            return response()->json(['message'=>'user not found'],404);
        }

        return response()->json(['message'=>'Category deleted a successfully'],200);
    }
}
