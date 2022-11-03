import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Signin from "./Signin";
import { BrowserRouter, Link } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";

function AddUserForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/signin", { replace: true });
    } catch (e) {
      console.error(e.message);
    }

    setPassword("");
    setEmail("");
  };

  return (
    <>
      <Container>
        <h1>Provide your information to Register</h1>
        <br />
      </Container>
      <Container>
        <Form>
          Already a Member?
          <br />
          <Link to="/signin">
            <Button onClick={Signin} type="submit" variant="warning">
              Go to Login Page
            </Button>
          </Link>
        </Form>
        <br />

        <Row>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>

                <Form.Control
                  placeholder="Enter a valid email address"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="Enter a strong password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Button onClick={handleSubmit} variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddUserForm;
