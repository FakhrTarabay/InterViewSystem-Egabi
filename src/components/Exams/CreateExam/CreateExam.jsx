import React, { useState } from "react";
import Selector from "../../UI/Selector";
import CEXA from "./CreateExam.module.css";
import Container from "../../UI/Container";
import Button from "react-bootstrap/Button";
const CreateExam = () => {
  const [topics] = useState(["eng", "react", "angular", "IQ"]);
  const [exName, setExName] = useState("")
  const [selectedTopic, setSelectedTopic] = useState("");
  const [noOFQ, setNoOFQ] = useState("");
  const [toSent, setToSent] = useState([]);
  const [toSent2, setToSent2] = useState([]);

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
        className={CEXA.divRow}
      >
        <Container className={CEXA.width40}>
          <form
            className={CEXA.form}
            onSubmit={(e) => {
              e.preventDefault();
              HandleAdd();
            }}
          >
             <label className={CEXA.formElement}>
              Exam name
            </label>
            <input
              required
              className={`${CEXA.input} ${CEXA.formElement}`}
              placeholder="Enter Exam name"
              onChange={(e) => setExName(e.target.value)}
              value={exName}
              type="text"
            ></input>
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
            className={`btn-primary ${CEXA.subBtn}`}
            onClick={() => {
              console.log(toSent);
              console.log(toSent2);
            }}
          >
            Submit
          </Button>
        </Container>
        <Container className={CEXA.width40}>
          {
            <ul className={CEXA.list}>
              {zip(toSent, toSent2).map((elem,index) => (
                <li
                  key={index}
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
