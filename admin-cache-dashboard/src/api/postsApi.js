
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// 1. Saare posts mangwane ka function
const getPosts = async () => {
  // Demo ke liye limit 6 rakhi hai taake dashboard saaf lage
  const response = await axios.get(`${BASE_URL}?_limit=6`);
  return response.data;
};

// 2. Naya post add karne ka function
const createPost = async (newPost) => {
  const response = await axios.post(BASE_URL, newPost);
  return response.data;
};

// 3. Post delete karne ka function
const deletePost = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

// Saare functions ko end par aik sath export kiya
export { getPosts, createPost, deletePost };