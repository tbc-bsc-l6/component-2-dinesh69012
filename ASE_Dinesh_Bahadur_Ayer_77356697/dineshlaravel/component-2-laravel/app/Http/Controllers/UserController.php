<?php

namespace App\Http\Controllers;

use App\Mail\EmailVerification;
use App\Mail\PasswordReset;
use App\Models\User;
use Carbon\Carbon;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use MongoDB\BSON\Int64;
use function Laravel\Prompts\password;

class UserController extends Controller
{
    public function index(){
        $user = User::all();
        return response()->json(['users'=>$user],200);
    }


    public function getAllSeller() {
        $users = User::where('role', 1)->get();
        return response()->json(['sellers' => $users]);
    }


    public function findUserById($id): \Illuminate\Http\JsonResponse
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json(['user' => $user], 200);
    }
    private function generateOTP()
    {
        return random_int(1000, 9999);
    }

    public function otpValidation(Request $request)
    {
        $validateData = $request->validate([
            'otp'=> 'required|int|min:4',
            'id'=>'required|int',
        ]);

        $otpNumber = $validateData['otp'];
        $id = $validateData['id'];

        $user = User::find($id);

        if (!$user) {
            return response()->json(["message"=>"User not found"], 404);
        }

        if ($user->otp === $otpNumber) {
            $user->email_verified_at = Carbon::now();
            $user->is_verified = true;
            $user->save();

            return response()->json(["message"=>"Email verified successfully"]);
        } else {
            return response()->json(["message"=>"OTP did not match"]);
        }
    }
    public function store(Request $request)
    {
        // Log request data
        \Log::info('Request data:', $request->all());

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'role' => 'integer|max:255',
            'password' => 'required|string|min:8|confirmed',
        ]);

        // Log validated data
        \Log::info('Validated data:', $validatedData);

        try {
            $otp = $this->generateOTP();
            $name = $validatedData['name'];
            $email = $validatedData['email'];

            Mail::to($email)->send(new EmailVerification($otp, $name));
            \Log::info('Before user creation');

            // Create user
            $user = User::create([
                'name' => $validatedData['name'],
                'username' => $validatedData['username'],
                'role' => $validatedData['role'],
                'email' => $validatedData['email'],
                'otp' => $otp,
                'password' => Hash::make($validatedData['password']),
            ]);

            // Get the user ID
            $userID = $user->id;

            // Email sent successfully along with the user ID
            return response()->json(['message' => 'Email sent successfully', 'userID' => $userID], 200);
        } catch (\Exception $e) {
            // Log exception
            \Log::error('Error creating user: ' . $e->getMessage());
            // Email sending failed
            return response()->json(['error' => 'Failed to create user or send email'], 500);
        }
    }


    public function sellerStore(Request $request)
    {
        // Log request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'role' => 'integer|max:255',
            'password' => 'required|string|min:8|confirmed',
        ]);
        try {
            $user = User::create([
                'name' => $validatedData['name'],
                'username' => $validatedData['username'],
                'role' => $validatedData['role'],
                'email' => $validatedData['email'],
                'otp' => 5555,
                'password' => Hash::make($validatedData['password']),
            ]);

            // Email sent successfully
            return response()->json(['message' => 'Email sent successfully'], 200);
        } catch (\Exception $e) {
            // Log exception
            \Log::error('Error creating user: ' . $e->getMessage());
            // Email sending failed
            return response()->json(['error' => 'Failed to create user or send email'], 500);
        }
    }



    public function loginUser(Request $request){
        $validatedData = $request->validate([
            'username' => 'required|string|max:255',
            'password' => 'required|string|max:255'
        ]);

        $user = User::where('username', $validatedData['username'])->first();

        if (!$user) {
            return response()->json(["message" => "User Not Found"], 404);
        }

        // Here, $user->password contains the hashed password from the database
        if (password_verify($validatedData['password'], $user->password)) {
            // Password matches
            return response()->json(['message' => "Login Successful", 'user' => $user], 200);
        } else {
            // Password doesn't match
            return response()->json(["message" => "Incorrect Password"], 401);
        }
    }

    public function forgetPassword(Request $request){
        $validateData = $request->validate([
            'username'=>'required|string|max:255'
        ]);

        $user = User::where('username',$validateData['username'])->first();

        $otp= $this->generateOTP();
        $email = $user->email;
        $name = $user->name;

        if(!$user){
            \response()->json(["message"=>'user not found'],404);
        }else{
            Mail::to($email)->send(new PasswordReset($otp, $name));

            $user->otp = $otp;
            $user->save();
            return \response()->json(["message"=>"OTP message is send to mail"],200);
        }
    }


    public function resetPassword(Request $request)
    {
        $validateData = $request->validate([
            'password' => 'required|string|min:8|confirmed',
            'username' => 'required|string|max:255'
        ]);

        $user = User::where('username', $validateData['username'])->first();

        if (!$user) {
            return response()->json(["message" => "User not found"], 404);
        } else {
            $user->password = Hash::make($validateData['password']);
            $user->save();
            return response()->json(["message" => "Password changed successfully"], 200);
        }
    }







}
