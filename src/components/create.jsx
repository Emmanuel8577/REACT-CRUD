import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import users from './user';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [age, setAge] = useState("");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();
    const uni = id.slice(0, 8); // Assuming you want the first 8 characters of the UUID

    if (name === "" || email === "" || mobileNumber === "" || age === "") {
      alert("Invalid input");
      return;
    }

    users.push({
      id: uni,
      Name: name,
      Email: email,
      MobileNumber: mobileNumber,
      Age: age,
    });

    history("/");
  }

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: '5rem' }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email Address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="mobileNumber">
          <Form.Control
            onChange={(e) => setMobileNumber(e.target.value)}
            type="text"
            placeholder="Enter Mobile Number"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="age">
          <Form.Control
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="Enter Age"
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
        <Link className='d-grid gap-2' to="/Home" />
        <Button variant='info' size='lg'>
            Home
        </Button>
      </Form>
    </div>
  );
}

export default Create;
