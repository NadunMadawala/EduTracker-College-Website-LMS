import React from "react";
import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function LandingPage() {
  return (
    <Container className="root">
      <Box className="sectionA" id="home">
        <Typography variant="h2" className="title">
          Welcome to EduTracker
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          gutterBottom
          style={{ marginBottom: 20 }}
        >
          Streamline the monitoring and evaluation of student performance.
        </Typography>
        <Button variant="contained" color="primary" className="callToAction">
          <a href="#login" style={{ color: "inherit", textDecoration: "none" }}>
            Get Started
          </a>
        </Button>
      </Box>

      <Box className="sectionB" id="features">
        <Typography variant="h4" className="title" style={{ marginBottom: 40 }}>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className="featurePaper" elevation={3}>
              <Typography variant="h6">Track Assignments</Typography>
              <Typography variant="body1" color="textSecondary">
                Keep up with all your assignments and due dates in one place.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className="featurePaper" elevation={3}>
              <Typography variant="h6">Monitor Performance</Typography>
              <Typography variant="body1" color="textSecondary">
                Get insights into student progress with detailed reports.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className="featurePaper" elevation={3}>
              <Typography variant="h6">Easy Communication</Typography>
              <Typography variant="body1" color="textSecondary">
                Enhance communication between teachers and students.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box className="sectionC" id="login">
        <Typography variant="h5" className="title" style={{ marginBottom: 40 }}>
          Ready to take your education tracking to the next level?
        </Typography>
        <Link to="/signup">
          <Button
            variant="contained"
            color="secondary"
            className="callToAction"
          >
            <ExitToAppIcon style={{ marginRight: 8 }} />
            Sign Up
          </Button>
        </Link>
        <Link to="/login" style={{ marginLeft: 8 }}>
          <Button
            variant="contained"
            color="secondary"
            className="callToAction"
          >
            <AssignmentIndIcon style={{ marginRight: 10 }} />
            Login
          </Button>
        </Link>
      </Box>

      <Box className="footer" id="contact">
        <div className="footerGrid">
          <div className="footerColumn">
            <Typography className="footerTitle" style={{ marginBottom: 20 }}>
              About EduTracker
            </Typography>
            <Typography variant="body2">
              EduTracker is designed to help educators and students monitor and
              enhance their academic performance with ease.
            </Typography>
          </div>
          <div className="footerColumn">
            <Typography className="footerTitle" style={{ marginBottom: 20 }}>
              Quick Links
            </Typography>
            <a href="#home" className="footerLink">
              Home
            </a>
            <a href="#features" className="footerLink">
              Features
            </a>
            <a href="#contact" className="footerLink">
              Contact
            </a>
          </div>
          <div className="footerColumn">
            <Typography className="footerTitle" style={{ marginBottom: 20 }}>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: nmadawala96@gmail.com
            </Typography>
            <Typography variant="body2">Phone: +94 074 116 5342</Typography>
            <Typography variant="body2">
              Address: No:30/A/68, Galwarusawa Rd, Korathota, Kaduwela.
            </Typography>
          </div>
        </div>
        <Box className="footerBottom">
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Developed by Nadun
            Madawala-EduTracker. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default LandingPage;
