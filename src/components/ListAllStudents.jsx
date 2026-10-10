import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import editIcon from "../images/edit.jpeg";
import deleteIcon from "../images/delete.png";

function ListAllStudents() {
  const [allStudents, setAllStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost:9090/students/getAllStudents",
      );

      // Handle HTTP errors such as 404 or 500
      if (!response.ok) {
        throw new Error(
          `Unable to load students. Server returned ${response.status}.`,
        );
      }

      const data = await response.json();

      // Validate the response
      if (!Array.isArray(data)) {
        throw new Error("Invalid response received from the server.");
      }

      setAllStudents(data);
    } catch (err) {
      console.error("Error fetching students:", err);

      // Friendly message if the backend is down or unreachable
      setError(
        "Unable to load students. Please check your connection and try again.",
      );

      setAllStudents([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="loading-message">Loading students...</p>;
  }

  if (error) {
    return (
      <div className="error-container" role="alert">
        <p>{error}</p>
        <button onClick={fetchStudents}>Try Again</button>
      </div>
    );
  }

  if (allStudents.length === 0) {
    return (
      <div className="empty-container">
        <h3>No Students Found</h3>
        <p>There are no student records yet. Add a student to get started.</p>
      </div>
    );
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Sex</th>
          <th>Date of Birth</th>
          <th>Hobbies</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {allStudents.map((student, index) => (
          <tr key={index}>
            <td>{student.studentName}</td>
            <td>{student.email}</td>
            <td>{student.sex}</td>
            <td>{student.dob}</td>
            <td>{student.hobbies}</td>
            <td>
              <img
                src={editIcon}
                alt="Edit"
                style={{ width: "20px", height: "20px" }}
              />
            </td>
            <td>
              <img
                src={deleteIcon}
                alt="Delete"
                style={{ width: "20px", height: "20px" }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListAllStudents;
