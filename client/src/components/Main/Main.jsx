import styles from "./styles.module.css";
import { Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";
import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = () => {
  const [firstName, setFirstName] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token); // Decoding the token to get user data
      setFirstName(user.firstName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/subject",
        formData
      );
      console.log("Subject created:", response.data);
    } catch (error) {
      console.error(
        "Error submitting form",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.main_container}>
        <nav className={styles.navbar}>
          <IconButton edge="start" aria-label="menu">
            <SchoolIcon sx={{ color: "white", margin: 5 }} />
            <h1>Edu Tracker</h1>
          </IconButton>
          <Toolbar>
            <Button color="inherit">
              <Link to="/Main" className={styles.navLink}>
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="#features" className={styles.navLink}>
                Features
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/MainLoad" className={styles.navLink}>
                Subjects
              </Link>
            </Button>
          </Toolbar>
          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
        </nav>
        <div className={styles.welcome_banner}>
          <h2>Hi, {firstName}!</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <h1>Create subject</h1>

        <div className="form-row">
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="input"
            placeholder="Enter subject title"
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="input"
            placeholder="Enter subject description"
          />
        </div>

        <Button
          type="submit"
          className="blue_btn"
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
        >
          Add
        </Button>
        <Link to="/MainLoad">
          <Button
            type="button"
            className="blue_btn"
            variant="contained"
            color="primary"
            style={{ margin: "10px" }}
          >
            View
          </Button>
        </Link>
      </form>

      <div className={styles.footer} id="contact">
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <Typography
              className={styles.footerTitle}
              style={{ marginBottom: 20 }}
            >
              About EduTracker
            </Typography>
            <Typography variant="body2">
              EduTracker is designed to help educators and students monitor and
              enhance their academic performance with ease.
            </Typography>
          </div>
          <div className={styles.footerColumn}>
            <Typography
              className={styles.footerTitle}
              style={{ marginBottom: 20 }}
            >
              Quick Links
            </Typography>
            <a href="#home" className={styles.footerLink}>
              Home
            </a>
            <a href="#features" className={styles.footerLink}>
              Features
            </a>
            <a href="#contact" className={styles.footerLink}>
              Contact
            </a>
          </div>
          <div className={styles.footerColumn}>
            <Typography
              className={styles.footerTitle}
              style={{ marginBottom: 20 }}
            >
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
        <Box className={styles.footerBottom}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Developed by Nadun
            Madawala-EduTracker. All rights reserved.
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Main;
