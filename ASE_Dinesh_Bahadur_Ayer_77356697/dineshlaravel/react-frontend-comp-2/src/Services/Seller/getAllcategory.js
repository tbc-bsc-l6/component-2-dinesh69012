import axios from 'axios'
import baseURL from '../Apis/api'

async function getAllcategory() {
    try {
        const response = await axios.get(baseURL+"category");
        return response.data;
        
    } catch (error) {
        throw error
    }
  
}

export default getAllcategory;
