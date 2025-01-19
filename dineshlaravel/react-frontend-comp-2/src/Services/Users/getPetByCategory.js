import axios from "axios"
import baseURL from "../Apis/api"

async function getPetByCategory() {
    const response = await axios.get(baseURL+"")
  
}

export default getPetByCategory
