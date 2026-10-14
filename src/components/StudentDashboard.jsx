import { useState } from "react";
import Button from "react-bootstrap/Button";
import StudentModal from "./StudentModal";
import ListAllStudents from "./ListAllStudents";

function StudentDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleAdd = () => {
    setMode("add");
    setSelectedStudent(null);
    setShowModal(true);
  };

  const handleEdit = (student) => {
    console.log("Edit student:", student);
    setMode("edit");
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <h1>All Students</h1>

      <Button variant="primary" onClick={handleAdd}>
        Add Student
      </Button>

      <ListAllStudents onEdit={handleEdit} />

      <StudentModal
        show={showModal}
        onClose={handleClose}
        mode={mode}
        student={selectedStudent}
      />
    </>
  );
}

export default StudentDashboard;
