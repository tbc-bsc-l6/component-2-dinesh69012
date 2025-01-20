import React, { useEffect, useState } from 'react';
import img from '../../Pet_Images/otp.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin, setSignup } from '../../../Services/Redux-Service/counterSlice';
import otpService from '../../../Services/LoginSignup/otpService';

function Otp(props) {


  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputs = Array.from({ length: 4 });

  const [redirectTologin, setRedirectTologin] = useState(false);
  const [errorMessage, setErrormessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  



  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== '' && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      otpInputs[index - 1].focus();
    }
  };
  
 async function handelSubmit(){
    const otpValue = parseInt(otp.join(''));
    console.log('Enter OTP: ', otpValue);
    const data = {
        id: id,
        otp: otpValue
    }
    console.log(data);

    try{
        
       const response = await otpService(data);
       console.log(response);
      setErrormessage("");
      setRedirectTologin(true);

    }catch(error){
      console.log(error);
      setErrormessage("Invalid OTP");

    }
    

    setOtp(["","","",""]);
  }

  useEffect(() => {
    if (redirectTologin) {
      const timeout = setTimeout(() => {
        dispatch(setSignup(false));

         dispatch(setLogin(true));

         navigate('/');
        setRedirectTologin(false); // Reset the flag
        
      }, 3000); // 3000 milliseconds = 3 seconds

      return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
    }
  }, [redirectTologin]);

  
    
  

  return (true)?
    <div className='flex justify-center top-0 w-full left-0 fixed items-center h-screen dhamilo'>
      <div className='w-[260px] py-2 bg-white text-center rounded-lg flex flex-col justify-center items-center border'>
        <img className='my-2 w-[40%]' src={img} alt="img" />
        <div
            className=" text-center w-[50%]  rounded-lg alert-danger mb-2"
            role="alert"
          >
            {errorMessage}
          </div>
        <h1 className='text-black text-2xl mt-2 mb-1 font-bold'>Enter OTP Code</h1>
        <p className='text-sm text-[#746E6E]'>Check your mail for OTP</p>
        <div className='flex gap-3 my-3'>
          {otpInputs.map((input, index) => (
            <input
              key={index}
              type="text"
              className='border rounded-lg w-[40px] text-center font-bold h-[50px]'
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (otpInputs[index] = el)}
            />
          ))}
        </div>
        <button  onClick={handelSubmit} className='hover:bg-[#c34e56] bg-[#EC2633] active:bg-[#88b7ed] text-white px-[80px] py-2 rounded-md my-2'>Submit</button>
      </div>
    </div>
  :"";
}



export default Otp;
