import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import StudentForm from "./StudentForm";

function StudentModal({ show, onClose, student, mode }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {mode === "edit" ? "Edit Student" : "Add Student"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <StudentForm mode={mode} student={student} onSuccess={onClose} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>

        <Button variant="primary" type="submit" form="studentForm">
          {mode === "edit" ? "Update Student" : "Save Student"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StudentModal;
