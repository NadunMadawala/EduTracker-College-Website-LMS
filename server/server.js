const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./Database/db");
const userRoutes = require("./Routes/users");
const authRoutes = require("./Routes/auth");
const subjectRoutes = require("./Routes/subject");

// Database connection
connection();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/subject", subjectRoutes);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
