import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import editIcon from "../images/edit.jpeg";
import deleteIcon from "../images/delete.png";
 
const ListAllStudents = () => {
  const [allStudents, setAllStudents] = useState([]);
  useEffect(() => {
    console.log("ListAllStudents component mounted");
    fetch("http://localhost:9090/students/getAllStudents")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched students data:", data);
        setAllStudents(data);
      });
  }, []);
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
};
 
export default ListAllStudents;
 
 