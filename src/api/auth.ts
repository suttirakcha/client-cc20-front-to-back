import axios from "axios";

export const actionRegister = async (data: any) =>
  await axios.post("http://localhost:8000/auth/register", data);

export const actionLogin = async (data: any) =>
  await axios.post("http://localhost:8000/auth/login", data);
