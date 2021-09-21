import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Nav from "./Nav";
import axios from "axios";

const Home = () => {
  const [file, setFile] = useState({});
  const checkUpload = (e) => {
    let path = e.target.files[0];
    // var allowedExtensions = /(\.json)$/i;
    console.log(path);
    if (!path?.name.match(/.(json)$/)) {
      alert({ invalidImage: "Please select valid image." });
    } else {
      setFile(path);
    }
  };
  const submitFile = (e) => {
    // console.log(e.target.files[0]);
    const data = new FormData();
    data.append("file", file);
    axios.post("/upload", data);
  };
  return (
    <div>
      <Nav />
      <Container className="p-3">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" onChange={checkUpload} />
        </Form.Group>
        <Button onClick={submitFile} variant="dark">
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default Home;
