import React, { useState } from "react";
import { Card, Button, Col, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import { connect, useDispatch } from "react-redux";
import { RemoveUser } from "../actions/userActions";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuthValue } from "../AuthContext";

function User(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    // dispatch(RemoveUser(props.userInfo.id));
    // props.RemoveUser(props.userInfo.id);
    try {
      await deleteDoc(doc(db, "users", props.userInfo.id));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            editUser={props.editUser}
            hide={handleClose}
            userInfo={props.userInfo}
          />
        </Modal.Body>
      </Modal>
      <Col md={10}>
        <Card>
          <Card.Body>
            <Card.Title>Name: {props.userInfo.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Email:{props.userInfo.email}
            </Card.Subtitle>
            <Card.Text>Gen :{props.userInfo.gen}</Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Edit
            </Button>
            <Button variant="danger" onClick={handleDelete} href="#">
              Delete Me
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

const mapDispatchToProps = {
  RemoveUser,
};
export default connect(null, mapDispatchToProps)(User);
