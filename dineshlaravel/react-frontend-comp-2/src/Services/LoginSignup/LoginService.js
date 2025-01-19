import axios from "axios";
import React from "react";
import baseURL from "../Apis/api";

async function LoginService(loginData) {
  try {
    const response = await axios.post(baseURL + "login", loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default LoginService;
