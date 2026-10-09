import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Student from "./Student";
import ListAllStudents from "./ListAllStudents";
function AllStudents() {
  const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <>
      <h1>All Students</h1>
      <Button variant="primary" onClick={handleShow}>
        Add Student
      </Button>
      <ListAllStudents/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Student onSuccess={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" form="studentForm">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
 
export default AllStudents;
 
 