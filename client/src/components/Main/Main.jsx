import styles from "./styles.module.css";
import { Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";
import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { jwtDecode } from "jwt-decode";

const Main = () => {
  const [firstName, setFirstName] = useState("");

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
              <a href="#home" className={styles.navLink}>
                Home
              </a>
            </Button>
            <Button color="inherit">
              <a href="#features" className={styles.navLink}>
                Features
              </a>
            </Button>
            <Button color="inherit">
              <a href="#contact" className={styles.navLink}>
                Contact
              </a>
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
