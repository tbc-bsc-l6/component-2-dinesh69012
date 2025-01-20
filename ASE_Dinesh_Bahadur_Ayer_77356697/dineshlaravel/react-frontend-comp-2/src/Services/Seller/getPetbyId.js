import axios from "axios";
import baseURL from "../Apis/api";

async function getPetbyId(id) {
  try {
    const response = await axios.get(baseURL + "pets/seller/" + id);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default getPetbyId;
