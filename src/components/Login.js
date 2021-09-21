import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import Nav from "./Nav";
const Login = () => {
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/Home");
      })
      .catch((error) => alert(error.message));
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Nav />
      <Container className="p-5">
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Col className="p-2">
              <Button onClick={signIn} variant="primary" type="submit">
                Login
              </Button>
            </Col>
            <Form.Text className="text-muted p-2">
              Want to be a member ?
            </Form.Text>
            <Col className="p-2">
              <Link to="/Signup">
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </Link>
            </Col>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
