import React, { useState } from "react";
import Container from "../UI/Container";
import Button from "@material-ui/core/Button";
import "../UI/Button.css";
import HomeDiv from "./HomeDiv.module.css";
import { Redirect } from "react-router-dom";

const Home = () => {
  const [goToExam, setGoToExam] = useState(false);
  const [goToForm, setGoToForm] = useState(false);
  if (goToExam) {
    return <Redirect push to="/regForm/" />;
  }
  if (goToForm) {
    return <Redirect push to="/regForm/" />;
  }
  return (
    <Container className={`${HomeDiv.HomeDiv}`}>
      <Button variant="contained" onClick={() => setGoToExam(true)}>
        Manage Registration form
      </Button>
      <Button variant="contained" onClick={() => setGoToForm(true)}>
        Manage Interview exam
      </Button>
    </Container>
  );
};

export default Home;
