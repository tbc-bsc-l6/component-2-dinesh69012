import axios from 'axios'
import React from 'react'
import baseURL from '../Apis/api'

async function getVisiblepets() {
    try {
        const response = await axios.get(baseURL+"pets/visible");
        return response.data;
        
    } catch (error) {
        console.log("Error in fetching data", error);      
    }  
}
export default getVisiblepets
