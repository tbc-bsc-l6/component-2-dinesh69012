import axios from "axios"
import baseURL from "../Apis/api"

async function deletePetsById(id) {
    try {
        const response = await axios.delete(baseURL+"pets/delete/"+id);
        return response.data
        
    } catch (error) {
        console.error(error);        
    } 
}
export default deletePetsById

