import { useState, useEffect } from "react";
import "./index.css";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const SingleBlog = () => {
  useEffect(() => {}, []);

  let navigate = useNavigate();

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>
          <div>
            <button onClick={() => navigate(-1)} className="btn"></button>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default SingleBlog;
