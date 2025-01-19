<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PetController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WishlistController;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});


Route::get('/',[UserController::class,'index']);
Route::get('/seller',[UserController::class,'getAllSeller']);
Route::get('/users/{id}',[UserController::class, 'findUserById']);

//To register the user
Route::post('/create',[UserController::class,'store']);
Route::post('/createSeller',[UserController::class,'sellerStore']);
Route::post('/login',[UserController::class,'loginUser']);

//OTP email veification
Route::post('/otp',[UserController::class,'otpValidation']);
Route::post('/forgetPassword',[UserController::class,'forgetPassword']);
Route::post('/resetPassword',[UserController::class,'resetPassword']);

//Routes for the petController
Route::get('/pets',[PetController::class,'index']);
Route::post('/pets/create',[PetController::class,'store']);
Route::post('/pets/update/{id}',[PetController::class,'update']);
Route::get('/pets/get/{id}',[PetController::class,'show']);
Route::delete('/pets/delete/{id}',[PetController::class,'destroy']);
Route::get('/pets/seller/{id}',[PetController::class,'getPetbyseller']);
Route::get('/pets/visible',[PetController::class,'getVisiblePet']);

//Category Routes
Route::post('/category/create',[CategoryController::class,'store']);
Route::get('category',[CategoryController::class,'index']);

//Wishlist Routes
Route::get('/wishlist/{userId}',[WishlistController::class,'getByuserId']); //get wishlist through userId
Route::post('/wishlist/add',[WishlistController::class,'addToWishlist']);   // add to the wishlist
Route::delete('/wishlist/remove/{id}',[WishlistController::class,'destroy']); //delete from the wishlist


//Oders Routes
Route::get('/orders/{id}',[OrderController::class,'getOrdersByTraderId']);
Route::post('/order/create',[OrderController::class,'store']);


