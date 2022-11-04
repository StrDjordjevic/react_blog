import { useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { token } from "../../../components/BlogList/Blog";

const API = "http://18.192.182.140/api/categories";

const CreateCategories = () => {
  const [data, setData] = useState({
    id: 0,
    name: "",
  });

  let navigate = useNavigate();

  const handleCreate = async (e: any) => {
    e.preventDefault();
    if (data.name && data.id) {
      const categoryCreate = { ...data };
      const { id, name } = categoryCreate;
      const response = await axios.post(
        `${API}?api_token=${token}`,
        categoryCreate
      );
      if (response.statusText === "OK") {
        console.log();
        navigate(-1);
        console.log("Category created");
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
                placeholder="Category id"
                id="id"
                name="id"
                type="number"
                onChange={handleInputs}
                value={data.id}
              ></input>
              <input
                placeholder="Category name"
                type="text"
                name="name"
                id="name"
                onChange={handleInputs}
                value={data.name}
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

export default CreateCategories;
