import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";
import { Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import styles from "./styles.module.css";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const MainLoad = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/subject");
        setSubjects(response.data);
      } catch (error) {
        console.error(
          "Error fetching subjects",
          error.response?.data || error.message
        );
      }
    };

    fetchSubjects();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
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

          <h1>All Subjects</h1>
          <Grid container spacing={3}>
            {subjects.map((subject) => (
              <Grid item xs={12} sm={6} md={4} key={subject._id}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {subject.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {subject.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Link to="/Main">
            <Button type="button" className="blue_btn">
              Back
            </Button>
          </Link>
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
                EduTracker is designed to help educators and students monitor
                and enhance their academic performance with ease.
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
    </div>
  );
};

export default MainLoad;
