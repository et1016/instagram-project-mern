import { getJwtToken, getUser } from "./auth";
import { request } from "../utils/request";
const API_URL = import.meta.env.VITE_API_URL;

export async function createPost(image, description) {
  // console.log(image);
  // console.log(description);

  const formData = new FormData();
  // console.log(formData);

  formData.append("files.image", image);
  formData.append("data", JSON.stringify({ description }));
  await fetch(`${API_URL}/api/posts`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${getJwtToken()}`,
    },
  });
}

export async function loadPosts(filters = "") {
  const response = await request(
    `${API_URL}/api/posts?populate=*` + (filters && `&${filters}`)
  );
  return response.data.map((post) => ({
    id: post?.id,
    ...post?.attributes,
    image: post?.attributes?.image?.data?.[0]?.attributes?.url,
    // image: post?.attributes?.image?.data?.attributes?.url,
    user: {
      id: post?.attributes?.user?.data?.id,
      ...post?.attributes?.user?.data?.attributes,
    },
  }));
}

export async function likePost(id) {
  const response = await request(`${API_URL}/api/posts/${id}/like`, {
    method: "PUT",
  });
  return response.data;
}

export async function favorPost(id) {
  const response = await request(`${API_URL}/api/posts/${id}/favor`, {
    method: "PUT",
  });
  return response.data;
}

export async function loadPostsByMe() {
  return loadPosts(`filters[user][id][$eq]=${getUser().id}`);
}

export async function loadPostsLikedOrFavoredByMe(type = "likes") {
  const response = await request(
    `${API_URL}/api/users/me?populate[${type}][populate][0]=image`
  );
  return response[type].map((post) => ({
    ...post,
    image: post?.image?.[0].url,
  }));
}
