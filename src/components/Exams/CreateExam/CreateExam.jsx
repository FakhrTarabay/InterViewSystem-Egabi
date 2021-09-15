import React, { useState } from "react";
import Selector from "../../UI/Selector";
import CEXA from "./CreateExam.module.css";
import Container from "../../UI/Container";
import Button from "react-bootstrap/Button";
const CreateExam = () => {
  const [topics] = useState(["eng", "react", "angular", "IQ"]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [noOFQ, setNoOFQ] = useState("");
  const [toSent, setToSent] = useState([]);
  const [toSent2, setToSent2] = useState([]);

  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }

  function HandleAdd() {
    setToSent((prev) => [...prev, selectedTopic]);
    setToSent2((prev) => [...prev, +noOFQ]);
  }
  function zip(a, b) {
    var c = a.map(function (e, i) {
      return [e, b[i]];
    });
    return c;
  }
  return (
    <Container className={CEXA.col} style={{ alignItems: "center" }}>
      <h3>Create an Exam</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Container style={{ width: "40%", padding: "5px 20px" }}>
          <form
            className={CEXA.form}
            onSubmit={(e) => {
              e.preventDefault();
              HandleAdd();
            }}
          >
            <Selector
              className={`${CEXA.input} ${CEXA.formElement}`}
              items={topics}
              setValue={setSelectedTopic}
              value={selectedTopic}
              label="Topics"
              help="Pick topic"
            />
            <label className={CEXA.formElement}>
              Number of random questions from every topic
            </label>
            <input
              required
              className={`${CEXA.input} ${CEXA.formElement}`}
              placeholder="Number of questions from topic"
              onChange={(e) => setNoOFQ(e.target.value)}
              value={noOFQ}
              pattern="[0-9]{1,}"
              type="number"
              min="0"
              max="99"
            ></input>
            <Button
              variant="primary"
              size="lg"
              className="btn-primary"
              style={{ marginLeft: "0px" }}
              type="submit"
            >
              Add
            </Button>
          </form>
          <Button
            variant="primary"
            size="lg"
            className="btn-primary"
            style={{ marginLeft: "0px", marginTop: "5px" }}
            onClick={() => {
              console.log(toSent);
              console.log(toSent2);
            }}
          >
            Submit
          </Button>
        </Container>
        <Container style={{ width: "30%", padding: "5px 20px" }}>
          {
            <ul style={{ listStyle: "none" }}>
              {zip(toSent, toSent2).map((elem) => (
                <li
                  key={generateID()}
                >{`Topic ${elem[0]}, number of questions ${elem[1]}`}</li>
              ))}
            </ul>
          }
        </Container>
      </div>
    </Container>
  );
};

export default CreateExam;
