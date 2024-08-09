// src/components/NavBar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import "./NavBar.css";

function NavBar() {
  return (
    <AppBar position="static" className="appBar">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <SchoolIcon />
        </IconButton>
        <Typography color="inherit" variant="h6" className="title">
          EduTracker
        </Typography>
        <Button color="inherit">
          <a href="#home" className="navLink">
            Home
          </a>
        </Button>
        <Button color="inherit">
          <a href="#features" className="navLink">
            Features
          </a>
        </Button>
        <Button color="inherit">
          <a href="#contact" className="navLink">
            Contact
          </a>
        </Button>
        <a href="#login" className="login">
          <Button
            variant="contained"
            color="secondary"
            className="callToAction"
          >
            <AssignmentIndIcon />
            &nbsp; Login
          </Button>
        </a>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
