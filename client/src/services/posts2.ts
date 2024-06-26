import { BASE_URL, POSTS } from "../constants/endpoints";
import { PostType } from "../models/post";

const getPosts = async (token: string): Promise<PostType[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}${POSTS}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      console.error(data.message);
    }
    console.log("data received from getPosts service:", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("getPosts error:", error.message);
    } else {
      console.error("getPosts error:", "Unknown error");
    }
  }
};

const createPost = async (
  postData: PostType,
  token: string
): Promise<PostType | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}${POSTS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    if (!response.ok) {
      console.error(data.message);
    }
    console.log("data received from createPost service:", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("createPost error:", error.message);
    } else {
      console.error("createPost error:", "Unknown error");
    }
  }
};

const updatePost = async (
  postId: string,
  postData: PostType,
  token: string
): Promise<PostType | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}${POSTS}/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    if (!response.ok) {
      console.error(data.message);
    }
    console.log("data received from updatePost service:", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("updatePost error:", error.message);
    } else {
      console.error("updatePost error:", "Unknown error");
    }
  }
};

const deletePost = async (postId: string, token: string): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}${POSTS}/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      console.error(data.message);
    }
    console.log("data received from deletePost service:", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("updatePost error:", error.message);
    } else {
      console.error("updatePost error:", "Unknown error");
    }
  }
};

export { getPosts, createPost, updatePost, deletePost };
