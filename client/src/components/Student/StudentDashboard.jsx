import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.module.css";

const StudentDashboard = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Fetch assignments from the server
    const fetchAssignments = async () => {
      try {
        const response = await axios.get("/api/student/assignments");
        setAssignments(response.data);
      } catch (error) {
        console.error("Error fetching assignments", error);
      }
    };
    fetchAssignments();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <h2>Your Assignments</h2>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment._id}>
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
