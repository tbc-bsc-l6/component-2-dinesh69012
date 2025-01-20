import axios from "axios"
import baseURL from "../Apis/api";

async function getAllpets() {
    try {
        const response = await axios.get(baseURL+"pets");
        return response.data;
        
    } catch (error) {
        throw error;
    }
}

export default getAllpets;
