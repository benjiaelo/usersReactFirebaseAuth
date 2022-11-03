import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import AddUserForm from "../components/AddUserForm";
import AllUsers from "../components/AllUsers";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

function Home() {
  const handleClose = () => {
    signOut(auth);
  };
  return (
    <>
      <Container fluid>
        <h1 style={{ backgroundColor: "black", color: "white" }}>
          Welcome! Add a User
        </h1>
      </Container>

      <Container>
        <br />
        <br />
        <Row>
          <Col>
            <AddUserForm />
          </Col>

          <Col>
            <AllUsers />
          </Col>
          <Col md={3}>
            <Button
              onClick={handleClose}
              variant="outline-danger"
              style={{ padding: "10px 24px" }}>
              Logout
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
