import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Modal from "./login/Modal";
import { Container } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Modal />
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}
