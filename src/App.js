import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";
import {
  collection,
  orderBy,
  query,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "./firebase/config";
import { addUser } from "./actions/userActions";
import { useDispatch } from "react-redux";
import Routing from "./Routing";
import { authUser } from "./actions/authActions";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter, Link, Switch } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const readData = async () => {
        const q = query(collection(db, "users"), orderBy("timestamp", "desc"));
        const unsubscribe = await onSnapshot(q, (querySnapshot) => {
          const users = [];
          querySnapshot.forEach((doc) => {
            users.push(doc.data());
          });
          dispatch(addUser(users));
          console.log(users);
        });
      };
      readData();
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authUser(user));
      } else {
        dispatch(authUser(null));
      }
    });
  }, [dispatch]);

  return (
    <>
      {/* <BrowserRouter> */}
      <AuthProvider value={{ currentUser }}>
        <Container>
          <Routing />
        </Container>
      </AuthProvider>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
