import React from "react";
import { useState, useEffect } from "react";
import flag from "../../Pet_Images/puppies_signup_png.png";
import logo from "../../Pet_Images/puppies.jpg";
import { Spinner } from "@chakra-ui/react";
import signupService from "../../../Services/LoginSignup/signupService";
import { useDispatch, useSelector } from "react-redux";
import { setSignup } from "../../../Services/Redux-Service/counterSlice";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const signins = useSelector((state) => state.counter.signupPopup)  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  const [signupData, setSignupdata] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    confirmPassword: "",
  });
  const [signup, setsignup] = useState(true);
  const [errorMessage, setErrormessage] = useState("");
  const [redirectToOTP, setRedirectToOTP] = useState(false);

  const [spinner, setSpinner] = useState(false);

  async function handelClick() {
    if (signupData.name == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.username == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.password == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.email == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.phone == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.confirmPassword == "") {
      setErrormessage("Name Field can't be Empty !!");
    } else if (signupData.password != signupData.confirmPassword) {
      setErrormessage("Confirm Password does not match with the new password");
    } else {
      const data = {
        name: signupData.name,
        username: signupData.username,
        email: signupData.email,
        role:0,
        password: signupData.password,
        password_confirmation: signupData.confirmPassword,
      };

        try {
          setSpinner(true);
          const response = await signupService(data);
          console.log("response", response);
         // setRedirectToOTP(true);
         const someId = response.userID
         navigate(`/otp/${someId}`);
        } catch (error) {
          console.error(error);
        }
    }
    
  }

  useEffect(() => {
    if (redirectToOTP) {
      const timeout = setTimeout(() => {
        setRedirectToOTP(false); // Reset the flag
        props.setSignup(false);
        props.setOtp(true);
      }, 3000); // 3000 milliseconds = 3 seconds

      return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
    }
  }, [redirectToOTP]);

  function handelChange(event) {
    const { name, value } = event.target;
    setSignupdata({ ...signupData, [name]: value });
  }

  //   function handelRedirect(){
  //     dispatch(setlogin(true));
  //     dispatch(setSignup(false));
  //   }
  return signins ? (
    <div className="flex z-40 top-0 left-0 w-full justify-center fixed items-center h-screen dhamilo">
      <div className=" bg-white h-[480px] w-[680px] flex flex-col ">
        <div className=" h-[100px] flex justify-center border-[#a03636]">
          
        </div>
       <div className=" flex mr-10 justify-end ">
          <button onClick={() => dispatch(setSignup(false))}>
          <i className="absolute text-right top-[230px]  text-2xl focus:text-yellow-50 text-black   fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className=" justify-end items-center flex-col mx- ml-5 mb-6 flex">
        <h1 className="text-3xl text-green-600 font-bold">Signup</h1>
          <div className=" text-center  rounded-lg alert-danger" role="alert">
            {errorMessage}
          </div>

          <div className="flex w-full justify-around mb-1 ">
            <div className="w-[90%]">
              <label className="text-black mb-1 mt-2">Name</label>
              <br />
              <input
                className="border-[1px] bg-[#e4ab0036] w-[90%] rounded-lg py-1 px-1 border-black"
                type="text"
                placeholder=" Your Name"
                name="name"
                value={signupData.name}
                onChange={handelChange}
              ></input>
            </div>
            <div className="w-[90%]">
              <label className="text-black mb-1 mt-2">Username</label>
              <br />
              <input
                className="border-[1px]  bg-[#e4ab0036] w-[90%] py-1 px-1 rounded-lg border-black"
                type="text"
                placeholder=" Your Username"
                name="username"
                value={signupData.username}
                onChange={handelChange}
              ></input>
            </div>
          </div>
          <div className="flex mb-1 w-full">
            <div className="w-[90%]">
              <label className="text-black  mb-1 mt-2">Email</label>
              <br />
              <input
                className="border-[1px]  bg-[#e4ab0036] w-[90%] rounded-lg px-1 py-1  border-black"
                type="email"
                placeholder=" domain@gmail.com"
                name="email"
                value={signupData.email}
                onChange={handelChange}
              ></input>
            </div>
            <div className="w-[90%]">
              <label className="text-black mb-1 mt-2">Phone Number</label>
              <br />
              <input
                className="border-[1px]  bg-[#e4ab0036] w-[90%] px-1 py-1 rounded-lg border-black"
                type="text"
                placeholder=" (977)-9812346789"
                name="phone"
                value={signupData.phone}
                onChange={handelChange}
              ></input>
            </div>
          </div>
          <div className="flex mb-1 w-full ">
            <div className="w-[90%]">
              <label className="text-black mb-1 mt-2">Password</label>
              <br />
              <input
                className=" bg-[#e4ab0036] border-[1px] w-[90%] rounded-lg  py-1 px-1 border-black"
                type="password"
                placeholder=" ********"
                name="password"
                value={signupData.password}
                onChange={handelChange}
              ></input>
            </div>
            <div className="w-[90%]">
              <label className="text-black mb-1 mt-2">Confirm Password</label>
              <br />
              <input
                className="border-[1px]  bg-[#e4ab0036] w-[90%] py-1 px-1 rounded-lg border-black"
                type="password"
                placeholder=" ********"
                name="confirmPassword"
                value={signupData.confirmPassword}
                onChange={handelChange}
              ></input>
            </div>
          </div>
          <div className="mt-4  text-center w-full ">
            <button
              onClick={handelClick}
              className=" hover:bg-[#dee963] mr-8 text-green-600 active:bg-[#d7b22a] bg-green-600  w-[95%] py-2 rounded-lg text-white "
            >
              Register{" "}
              <p className="absolute -mt-[23px] ml-5">
                {" "}
                {spinner && <Spinner />}
              </p>
            </button>
          </div>
          <div className="flex mt-2 w-[90%] justify-between ">
            <p>Already have an account?</p>
            <a to="#">
              <button className="hover:text-[#dee963] text-green-600">
                Login?
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Signup;
