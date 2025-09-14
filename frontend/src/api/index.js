import axios from "axios";

// Replace baseURL with API.
const API = axios.create({ baseURL: "http://localhost:5000" });

// Safe function to get user from localStorage
const getUserFromStorage = () => {
   try {
      const storedProfile = localStorage.getItem("profile");
      if (!storedProfile || storedProfile === "undefined") {
         return null;
      }
      return JSON.parse(storedProfile);
   } catch (error) {
      console.warn("Failed to parse profile from localStorage:", error);
      localStorage.removeItem("profile"); // Clean up corrupted data
      return null;
   }
};

API.interceptors.request.use((req) => {
   if (localStorage.getItem("profile")) {
      const user = getUserFromStorage();
      if (user) {
         req.headers.sub = user.sub || user._id;
      }
   }
   return req;
});

const fetchPosts = () => API.get("/posts");

const createPost = (newPost) => API.post("/posts", newPost);

const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

const deletePost = (id) => API.delete(`/posts/${id}`);

const likePost = (id) => API.patch(`/posts/${id}/likePost`);

const signin = (inputText) => API.post("/user/signin", inputText);
const signup = (inputText) => API.post("/user/signup", inputText);

export {fetchPosts, createPost, updatePost, deletePost, likePost, signin, signup}; 