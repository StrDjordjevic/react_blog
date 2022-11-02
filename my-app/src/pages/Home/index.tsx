import "./index.css";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Blog from "../../components/BlogList/Blog";

const index = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>
          <Blog />
        </Box>
      </Container>
    </>
  );
};

export default index;
