import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import editIcon from "../images/edit.jpeg";
import deleteIcon from "../images/delete.png";
import StudentShimmer from "./StudentShimmer";
import StudentModal from "./StudentModal";

function ListAllStudents({ onEdit }) {
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
      console.log("Fetched students:", data);
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
    return <StudentShimmer />;
  }

  if (allStudents.length === 0) {
    return (
      <div className="empty-container">
        <p style={{ color: "red" }}>No Students Found.</p>
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
            <td>{student.dob.split("T")[0]}</td>
            <td>{student.hobbies}</td>
            <td>
              <button
                type="button"
                onClick={() => onEdit(student)}
                aria-label={`Edit ${student.studentName}`}
              >
                <img
                  src={editIcon}
                  alt="Edit"
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
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
