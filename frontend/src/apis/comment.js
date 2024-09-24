import { request } from "../utils/request";
const API_URL = import.meta.env.VITE_API_URL;

export async function createComment(content, postId) {
  await request(`${API_URL}/api/comments`, {
    method: "POST",
    body: {
      data: {
        content,
        post: postId,
      },
    },
  });
}

export async function loadComments(postId) {
  if (!postId) return [];
  const response = await request(
    `${API_URL}/api/comments?populate=*&filters[post][id][$eq]=` + postId
  );
  console.log("The comment api:", response);
  return response.data.map((comment) => {
    const result = comment?.attributes;
    return {
      id: comment?.id,
      content: result?.content,
      pubDate: result?.publishedAt,
      user: {
        id: result?.user?.data?.id,
        ...result?.user?.data?.attributes,
      },
    };
  });
}
