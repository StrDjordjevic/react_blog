import { Container } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [data, setData] = useState({
    title: "",
    body: "",
    category_id: 0,
  });

  let navigate = useNavigate();

  const handleEdit = async (e: any) => {
    e.preventDefault();
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
          <form className="create__form" onSubmit={handleEdit}>
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
        </Box>
      </Container>
    </>
  );
};

export default Edit;
