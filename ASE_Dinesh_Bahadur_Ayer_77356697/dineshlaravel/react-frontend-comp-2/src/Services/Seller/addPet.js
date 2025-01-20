import axios from 'axios'
import baseURL from '../Apis/api'

async function addPet(data) {
    try {
        const response = await axios.post(baseURL+"pets/create", data);
        return response.data
        
    } catch (error) {
        throw error;
    }
 
}

export default addPet
