import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { auth } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// import { FcGoogle } from "react-icons//FcGoogle";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";

function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigate("/", { replace: true });
      console.log(user);
    } catch (e) {
      alert(e.message);
      // navigate("/register", { replace: true });
      console.error(e.message);
    }

    setPassword("");
    setEmail("");
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithPopup(auth, provider);
      console.log(user);
      navigate("/", { replace: true });
    } catch (e) {
      console.error(e.message);
    }

    setPassword("");
    setEmail("");
  };

  return (
    <>
      <h1>Welcome to the Users App</h1>
      <Container>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Button onClick={handleSubmit} variant="primary" type="submit">
                Sign In
              </Button>
              <Button
                onClick={handleGoogle}
                variant="outline-primary"
                type="submit">
                sign In with Google
              </Button>
            </Form>
          </Col>
          <Col md={4}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Form>
              Not a Member Yet?
              <br />
              <Link to="/register">
                <Button onClick={Signin} variant="dark" type="submit">
                  Click here to Register
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signin;
