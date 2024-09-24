import { request } from "../utils/request";
import { getUser, saveUser } from "../apis/auth";
const API_URL = import.meta.env.VITE_API_URL;

export async function changeUser(user) {
  const response = await request(`${API_URL}/api/users/${getUser().id}`, {
    method: "PUT",
    body: user,
  });
  saveUser(response);
  return response;
}
