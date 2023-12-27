import axios from "axios";

const API = axios.create({
  baseURL: "https://v-insta.onrender.com",
});

export const logIn = (FormData) => API.post("/auth/login", FormData);
