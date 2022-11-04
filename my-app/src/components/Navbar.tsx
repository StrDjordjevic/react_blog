import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Modal from "./login/Modal";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Modal />
          </Toolbar>
          <div className="nav">
            <Link to="/admin">Admin</Link>
            <Link to="/">Home</Link>
          </div>
        </AppBar>
      </Box>
    </Container>
  );
}
