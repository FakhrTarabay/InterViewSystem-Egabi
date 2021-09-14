import React from "react";
import Container from "../../UI/Container";
import Exa from "./Exam.module.css";
import Button from "react-bootstrap/Button";

const StartingPage = ({ isStart }) => {
  return (
    <Container className={Exa.col} style={{ alignItems: "center" }}>
      <h1>Welcome to Egabi FSI</h1>
      <p>
        Please read the following instructions carefully
        <br />
        1-The test will start as soon as you press the start button.
        <br />
        2-If you do not submit your answers before the time runs out, your
        answers will be submitted automatically.
        <br />
        3-You have 10 minutes to finish 20 questions.
        <br />
        4-There are multiple types of questions including : MCQ, Writing, True
        or false, and Comprehension.
      </p>
      <Container className={Exa.rowBtn}>
        <div>
          <Button
            variant="primary"
            size="lg"
            className="btn-primary"
            onClick={() => isStart(true)}
          >
            Start
          </Button>
        </div>
      </Container>
    </Container>
  );
};

export default StartingPage;
