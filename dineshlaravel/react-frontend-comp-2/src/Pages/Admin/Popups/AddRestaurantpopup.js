import axios from "axios";
import React, { useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddRestaurantpopup({ onClose }) {
  //sending data

  const [postdata, setPostdata] = useState({
    username: "",
    restaurantName: "",
    restaurantAddress: "",
    phone: "",
    email: "",

    role: "ROLE_RESTAURANT",
    isPublished: true,
  });
  const resetForm = () => {
    setPostdata({
      username: "",
      restaurantName: "",
      restaurantAddress: "",
      phone: "",
      email: "",

      role: "ROLE_RESTAURANT",
      isPublished: true,
    });
  };

  const handleUsernameChange = (event) => {
    setPostdata({
      ...postdata,
      username: event.target.value,
    });
  };

  const handleRestaurantNameChange = (event) => {
    setPostdata({
      ...postdata,
      restaurantName: event.target.value,
    });
  };

  const handleRestaurantAddressChange = (event) => {
    setPostdata({
      ...postdata,
      restaurantAddress: event.target.value,
    });
  };

  const handleEmailChange = (event) => {
    setPostdata({
      ...postdata,
      email: event.target.value,
    });
  };

  const handlePhoneChange = (event) => {
    setPostdata({
      ...postdata,
      phone: event.target.value,
    });
  };

  console.log("The data is:", postdata);

  //posting data
  function handlePost() {
    axios
      .post("http://localhost:8080/register-restaurant", postdata)
      .then((resp) => {
        console.log("Api response", resp.data);
        resetForm();
      })
      .catch((error) => {
        console.log("Error!!!", error);
      });
  }

  const successToast = () => {
    toast.success("Restaurant successfully added.", {
      position: "top-center",
      autoClose: 5000,
      transition: Flip,
    });
  };

  const handleButtonClick = () => {
    handlePost();
    setTimeout(() => {
      window.location.reload();
      successToast();
    }, 1000);
  };

  return (
    <>
      <div className="Restpop fixed inset-0 flex items-center justify-center z-50 backdrop-blur backdrop-filter bg-opacity-40 cursor-default ">
        <div className="contar h-[440px] w-[440px] border-1 bg-[white] p-[0px]">
          <div className=" flex header bg-[#e8e8e8eb] h-[80px] ">
            <img src="/Image/newaExpress.png" alt="Logo" className="h-[90px]" />
            <p className="a ml-7 mt-[25px] text-[#FB6612] font-semibold  text-base">
              Add Restaurants to your Site
            </p>
            <button
              className="x ml-[80px] mt-[0px] font-extrabold text-[20px] text-black"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="middle flex">
            <p className=" text-black mt-4 ml-7 font-semibold text-[15px] pr-[10px]">
              Restaurant Name:
            </p>{" "}
            <input
              type="text"
              className="bg-[#fb671233] mt-4 border-[#FB6612] border-1 rounded-[5px] h-fit text-black"
              value={postdata.restaurantName}
              onChange={handleRestaurantNameChange}
            />
            <p className=" ml-[-275px] mt-[80px] text-black font-semibold pr-[10px]">
              UserName:
            </p>
            <input
              type="text"
              className="bg-[#fb671233] mt-[80px] border-[#FB6612] border-1 rounded-[5px] h-fit text-black"
              value={postdata.username}
              onChange={handleUsernameChange}
            />
            <p className=" ml-[-255px] mt-[130px] text-black font-semibold pr-[10px]">
              Address:
            </p>
            <input
              type="text"
              className="bg-[#fb671233] mt-[130px] border-[#FB6612] border-1 rounded-[5px] h-fit text-black"
              value={postdata.restaurantAddress}
              onChange={handleRestaurantAddressChange}
            />
            <p className=" ml-[-252px] mt-[180px] text-black font-semibold pr-[10px]">
              Contact:
            </p>
            <input
              type="text"
              className="bg-[#fb671233] mt-[180px] border-[#FB6612] border-1 rounded-[5px] h-fit text-black"
              value={postdata.phone}
              onChange={handlePhoneChange}
            />
            <p className=" ml-[-280px] mt-[230px] text-black font-semibold pr-[10px]">
              email
            </p>
            <input
              type="text"
              className="bg-[#fb671233] mt-[230px] border-[#FB6612] border-1 rounded-[5px] h-fit text-black w-[200px]"
              value={postdata.email}
              onChange={handleEmailChange}
            />
            <button
              className="ad border-1 border-green-300 bg-[#3aff3a28] h-fit mt-[310px] w-[64px] hover:bg-[#3fb83fe8] rounded-[10px] text-teal-800"
              onClick={handleButtonClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
