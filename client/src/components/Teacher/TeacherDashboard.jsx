import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.module.css";

const TeacherDashboard = () => {
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [editingSubjectId, setEditingSubjectId] = useState(null);

  useEffect(() => {
    // Fetch existing subjects from the server
    const fetchSubjects = async () => {
      try {
        const response = await axios.get("/api/teacher/subjects");
        setSubjects(response.data);
      } catch (error) {
        console.error("Error fetching subjects", error);
      }
    };
    fetchSubjects();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingSubjectId) {
        await axios.put(`/api/teacher/subjects/${editingSubjectId}`, formData);
        setEditingSubjectId(null);
      } else {
        await axios.post("/api/teacher/subjects", formData);
      }
      const response = await axios.get("/api/teacher/subjects");
      setSubjects(response.data);
      setFormData({ title: "", description: "" });
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/teacher/subjects/${id}`);
      setSubjects(subjects.filter((subject) => subject._id !== id));
    } catch (error) {
      console.error("Error deleting subject", error);
    }
  };

  const handleEdit = (subject) => {
    setFormData(subject);
    setEditingSubjectId(subject._id);
  };

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <h2>{editingSubjectId ? "Edit Subject" : "Create Subject"}</h2>
        <input
          type="text"
          name="title"
          placeholder="Subject Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Subject Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">
          {editingSubjectId ? "Update Subject" : "Add Subject"}
        </button>
      </form>

      <h2>Subjects</h2>
      <ul>
        {subjects.map((subject) => (
          <li key={subject._id}>
            <h3>{subject.title}</h3>
            <p>{subject.description}</p>
            <button onClick={() => handleEdit(subject)}>Edit</button>
            <button onClick={() => handleDelete(subject._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherDashboard;
