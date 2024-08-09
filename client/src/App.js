import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUpPage/SignUp";
import Main from "./components/Main/Main";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component
import "./App.css";

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
    </Routes>
  );
}

export default App;
