// auth.service.ts
import axios from 'axios'; // or any other HTTP client library

export const signIn = async (username: string, password: string) => {
  try {
    const response = await axios.post('http1://localhost:8080/api/login', { username, password });
    // Handle the response data (e.g., store the token, user data, etc.)
    return response.data;
  } catch (error) {
    // Handle the error
    throw error;
  }
};

export const signUp = async (username: string, password: string, email : string) => {
  try {
    const response = await axios.post('http//localhost:8080/api/register', { username, password , email});
    // Handle the response data (e.g., store the token, user data, etc.)
    return response.data;
  } catch (error) {
    // Handle the error
    throw error;
  }
};