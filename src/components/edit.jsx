import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import users from './user';
import { Link, useNavigate } from 'react-router-dom';

const Edit = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  const index = users.findIndex((user) => user.id === id);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || mobileNumber === "" || age === "") {
      alert("Invalid input");
      return;
    }

    let updatedUser = { ...users[index], Name: name, Email: email, MobileNumber: mobileNumber, Age: age };
    users[index] = updatedUser;

    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name") || "");
    setEmail(localStorage.getItem("Email") || "");
    setMobileNumber(localStorage.getItem("MobileNumber") || "");
    setAge(localStorage.getItem("Age") || "");
    setId(localStorage.getItem("id") || "");
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: '5rem' }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email Address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="mobileNumber">
          <Form.Control
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            type="text"
            placeholder="Enter Mobile Number"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="age">
          <Form.Control
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="Enter Age"
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
        <Link className='d-grid gap-2' to="/">
          <Button variant='info' size='lg'>
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;
