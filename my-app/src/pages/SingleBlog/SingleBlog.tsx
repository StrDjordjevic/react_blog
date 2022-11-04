import { useState, useEffect } from "react";
import "./index.css";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../components/BlogList/Blog";

const SingleBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    body: "",
    category_id: 0,
  });
  const { id } = useParams();
  useEffect(() => {
    getBlog();
  }, []);

  let navigate = useNavigate();

  //FETCH BLOGS

  const getBlog = async () => {
    const response = await axios.get(`${API}/${id}`);
    setBlog(response.data.data);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>
          <div className="blog__container">
            <div className="blog__content__wrap">
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <p className="category_id">Category id: {blog.category_id}</p>
            </div>
            <button onClick={() => navigate(-1)} className="btn">
              Back
            </button>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default SingleBlog;
