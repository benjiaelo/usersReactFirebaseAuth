import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addUser } from "../actions/userActions";
import { connect, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { doc, setDoc, serverTimestamp, timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

function AddUserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userInfo = {
      id: uuid(),
      name,
      email,
      gen,
      timestamp: serverTimestamp(),
    };
    try {
      await setDoc(doc(db, "users", userInfo.id), userInfo);
    } catch (e) {
      console.log(e);
    }

    // props.addUser(userInfo);
    //function to dispatch the action to the store use the useDispatch hook
    // dispatch(addUser(userInfo));
    setName("");
    setEmail("");
    setGen("");
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control
          type="gen"
          value={gen}
          onChange={(e) => {
            setGen(e.target.value);
          }}
        />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

// const mapDispatchToProps = {
// 	addUser: addUser,
// };
// export default connect(null, mapDispatchToProps)(AddUserForm);
export default AddUserForm;
