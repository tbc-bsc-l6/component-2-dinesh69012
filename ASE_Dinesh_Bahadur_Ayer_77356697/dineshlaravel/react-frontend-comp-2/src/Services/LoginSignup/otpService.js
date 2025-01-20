import axios from "axios";
import baseURL from "../Apis/api";

async function otpService(otpValue) {
   
    try {
      

        const response = await axios.post(baseURL + 'otp', otpValue);
        console.log("Request Data:", otpValue);
        console.log("Response:", response.data);
        
    } catch (error) {
        throw error;
        
    }

 
  
  
}

export default otpService;
