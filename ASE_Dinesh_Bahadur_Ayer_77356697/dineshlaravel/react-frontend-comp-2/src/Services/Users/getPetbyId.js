import baseURL from '../Apis/api'
import axios from 'axios'

async function getPetbyId(id) {
  try {
    const response = await axios.get(baseURL+"pets/get/"+id);
    return response.data
    
  } catch (error) {
    console.error("Its error",error);
    
  }
}

export default getPetbyId
