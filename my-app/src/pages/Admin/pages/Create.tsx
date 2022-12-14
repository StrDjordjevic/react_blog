import { useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { API, token } from "../../../components/BlogList/Blog";

const Create = () => {
  const [data, setData] = useState({
    title: "",
    body: "",
    category_id: 0,
  });

  let navigate = useNavigate();

  const handleCreate = async (e: any) => {
    e.preventDefault();
    if (data.title && data.body && data.category_id) {
      const blogCreate = { ...data };
      const response = await axios.post(
        `${API}?api_token=${token}`,
        blogCreate
      );
      if (response.statusText === "OK") {
        navigate(-1);
        console.log("Blog created");
      } else {
        console.log("Error");
      }
    } else {
      alert("please complete creation");
    }
  };

  const handleInputs = (e: any) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>
          <div>
            <form className="create__form" onSubmit={handleCreate}>
              <input
                placeholder="title"
                id="title"
                name="title"
                type="text"
                onChange={handleInputs}
                value={data.title}
              ></input>
              <input
                placeholder="text"
                type="text"
                name="body"
                id="body"
                onChange={handleInputs}
                value={data.body}
              ></input>
              <input
                placeholder="category"
                id="category"
                name="category_id"
                type="number"
                onChange={handleInputs}
                value={data.category_id}
              ></input>
              <button className="btn">Submit</button>
            </form>
            <button onClick={() => navigate(-1)} className="btn">
              Back
            </button>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Create;
