import React, { useEffect, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { auth } from "../firebase";
import { useStateValue } from "./Context/StateProvider";

const Nav = () => {
  const [state, dispatch] = useStateValue();
  // console.log(state.user?.user.email);
  const logout = () => {
    if (state.user) {
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  };

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("The user is >>>>>", authUser);

  //     if (authUser) {
  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Financepeer Test</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <p>{state.user?.user.email}</p>
            </Navbar.Text>
          </Navbar.Collapse>
          {state.user ? <Button onClick={logout}>Logout</Button> : ""}
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav;
