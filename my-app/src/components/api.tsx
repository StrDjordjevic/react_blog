import axios from "axios";

const API = "http://18.192.182.140/api/articles";

function getBlogs() {
  const response = axios.get(API);

  return response;
}

export { getBlogs };
