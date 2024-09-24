import { getJwtToken } from "../apis/auth";
const API_URL = import.meta.env.VITE_API_URL;

export async function uploadFile(file) {
  const formData = new FormData();
  formData.append("files", file);
  const response = await fetch(`${API_URL}/api/upload`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${getJwtToken()}`,
    },
  });
  const result = await response.json();
  return result[0].url;
}
