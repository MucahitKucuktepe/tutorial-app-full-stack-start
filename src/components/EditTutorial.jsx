import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
const EditTutorial = ({ handleClose, show, editData }) => {
  const { id, title: oldTitle, description: oldDescription } = editData;
  const [title, setTtile] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);

  useEffect(() => {
    setTtile(oldTitle);
    setDescription(oldDescription);
  }, [oldTitle, oldDescription]);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Edit Tutorial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                autoFocus
                value={title || ""}
                onChange={(e) => setTtile(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                autoFocus
                value={description || ""}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>handleClose(id,title,description) }>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTutorial;
