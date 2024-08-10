import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUpPage/SignUp";
import StudentDashboard from "./components/Student/StudentDashboard";
import TeacherDashboard from "./components/Teacher/TeacherDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Main from "./components/Main/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/main"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student-dashboard"
        element={
          <ProtectedRoute>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher-dashboard"
        element={
          <ProtectedRoute>
            <TeacherDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
