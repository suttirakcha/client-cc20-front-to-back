import axios from "axios";

export const getMe = async (token: string) =>
  await axios.get("http://localhost:8000/api/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getUsers = async (token: string) =>
  await axios.get("http://localhost:8000/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
