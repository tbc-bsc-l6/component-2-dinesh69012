import axios from "axios"
import baseURL from "../Apis/api"

async function updatePetService(id, data) {
  try {
    const response = await axios.post(baseURL+"pets/update/"+id, data);
    return response.data
    
  } catch (error) {
    console.log("Error in fetching the data", error);     
  }
}

export default updatePetService
