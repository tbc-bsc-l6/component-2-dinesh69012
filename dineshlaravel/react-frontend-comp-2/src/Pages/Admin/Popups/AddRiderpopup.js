import axios from "axios";
import React, { useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddRiderpopup({ onClose }) {
  //sending data

  const [riderdata, setRiderdata] = useState({
    username: "",
    password: "1111",
    email: "",
    phone: "",
    riderName: "",
    role: "ROLE_RIDER",
    orders: null,
  });
  const resetForm = () => {
    setRiderdata({
      username: "",
      riderName: "",
      phone: "",
      password: "1111",
      email: "",
      role: "ROLE_RESTAURANT",
      orders: null,
    });
  };

  const handleUsernameChange = (event) => {
    setRiderdata({
      ...riderdata,
      username: event.target.value,
    });
  };

  const handleRiderNameChange = (event) => {
    setRiderdata({
      ...riderdata,
      riderName: event.target.value,
    });
  };

  const handlePhoneChange = (event) => {
    setRiderdata({
      ...riderdata,
      phone: event.target.value,
    });
  };

  const handleEmailChange = (event) => {
    setRiderdata({
      ...riderdata,
      email: event.target.value,
    });
  };

  console.log("The data is:", riderdata);

  //posting data
  function handlePost() {
    axios
      .post("http://localhost:8080/riders", riderdata)
      .then((resp) => {
        console.log("Api response", resp.data);
        resetForm();
      })

      .catch((error) => {
        console.log("Error!!!", error);
      });

    window.location.reload();
    toast.success("Rider succesfully added.", {
      position: "top-center",
      transition: Flip,
    });
  }

  return (
    <>
      <div className="Restpop fixed inset-0 flex items-center justify-center z-50 backdrop-blur backdrop-filter bg-opacity-40 cursor-default ">
        <div className="contar h-[440px] w-[440px] border-1 bg-[white] p-[0px]">
          <div className=" flex header bg-[#e8e8e8eb] h-[80px] ">
            <img src="/Image/newaExpress.png" alt="Logo" className="h-[90px]" />
            <p className="a ml-7 mt-[25px] text-[#FB6612] font-semibold  text-base">
              Add Riders details
            </p>
            <button
              className="x ml-[80px] mt-[0px] font-extrabold text-[20px] text-black"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="middle flex mt-[30px]">
            <p className=" text-black mt-4 ml-[69px] font-semibold text-[15px] pr-[10px]">
              RiderName:
            </p>{" "}
            <input
              type="text"
              className="bg-[#fb671233] mt-4 border-[#FB6612] border-1 rounded-[5px] h-fit text-black"
              value={riderdata.riderName}
              onChange={handleRiderNameChange}
            />
            <p className=" ml-[-273px] mt-[80px] text-black font-semibold pr-[10px]">
              UserName:
            </p>
            <input
              type="text"
              className="bg-[#fb671233] mt-[80px] border-[#FB6612] border-1 rounded-[5px] h-fit text-black"
              value={riderdata.username}
              onChange={handleUsernameChange}
            />
            <p className=" ml-[-255px] mt-[130px] text-black font-semibold pr-[10px]">
              Contact:{" "}
            </p>
            <input
              type="text"
              className="bg-[#fb671233] mt-[130px] border-[#FB6612] border-1 rounded-[5px] h-fit text-black"
              value={riderdata.phone}
              onChange={handlePhoneChange}
            />
            <p className=" ml-[-240px] mt-[180px] text-black font-semibold pr-[10px]">
              email:
            </p>
            <input
              type="text"
              className="bg-[#fb671233] mt-[180px] border-[#FB6612] border-1 rounded-[5px] h-fit text-black"
              value={riderdata.email}
              onChange={handleEmailChange}
            />
            <button
              className="ad border-1 border-green-300 bg-[#3aff3a28] h-fit mt-[270px] w-[64px] hover:bg-[#3fb83fe8] rounded-[10px] text-teal-800"
              onClick={handlePost}
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
