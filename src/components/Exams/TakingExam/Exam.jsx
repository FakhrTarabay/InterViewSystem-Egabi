import React, { useState } from "react";
import ProgressBar from "../../UI/ProgressBar";
import Container from "../../UI/Container";
import RadioButtonsGroup from "../../UI/RadioGroup";
import Button from "react-bootstrap/Button";
import Edu from "../../Forms/Edu.module.css";
// import Timer from "react-compound-timer/build";
import css from "../CreateTopic.module.css";
import Exa from "./Exam.module.css";
import Lottie from "lottie-react";
import suc from "../../assets/lottie_app/successfully1.json";
import { Timer } from 'react-countdown-clock-timer';

const Exam = () => {
  const [flag, setFlag] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finalAnswers, setFinalAnswers] = useState([]);


  function HandleSubmit(val, index) {
    let res = answers;
    for (let elem of res) {
      if (elem.index === index) {
        elem.val = val;
        setAnswers([...res]);
        return;
      }
    }
    res.push({ index: index, val: val });
    setAnswers([...res]);
  }

  function HandleFinalAnswers(val) {
    let res = finalAnswers;
    if (res[index] !== undefined) {
      res[index] = val;
      setFinalAnswers([...res]);
      return;
    }
    res.push(val);
    setFinalAnswers([...res]);
  }

  function HandleForm() {
      setFinalAnswers((prev) => [...prev, answers]);
      setAnswers([])
  }

  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }
  const [Questions] = useState([
    {
      number: 1,
      Question: "aw el mofta7 tl3 day3 f3ln ana h2tl nfsiiiiiii",
      type: "MCQ",
      choices: ["1", "2", "3", "4", " 5"],
      answer: 1,
    },
    { number: 2, Question: "123", type: "T or F", answer: "T" },
    {
      number: 3,
      Question: "If a tree falls and nobody hears it, did it actually fall?",
      type: "Writing",
      answer: "asddddddddddddddddd",
    },
    {
      type: "Comprehension",
      number: 4,
      prompt:
        "(A) Scientists have known for a long time that vitamin D is essential for humans. If children have a vitamin D or calcium deficiency, they can develop rickets, a softening of the bones. New studies are showing that people of all ages need vitamin D to help them fight off diseases by keeping their immune systems strong.",
      ComprehensionQs: [
        "The main idea of this paragraph is that vitamin D.",
        "If something is essential, it is ………… .",
        "When you have a deficiency of something, you ………….	.",
      ],
      ComprehensionChoices: [
        [
          "is found in milk",
          "has been studied by scientists",
          "is no secret",
          "is important for good health",
        ],
        ["harmful", "expensive", "dreadful", "needed"],
        [
          "have all you need",
          "do not have enough",
          "look like an onion",
          "are rich",
        ],
      ],
      ComprehensionAs: [4, 4, 2],
    },
  ]);

  return flag ? (
    <div style={{ width: "400px", alignSelf: "center" }}>
      {console.log(finalAnswers)}
      <Lottie animationData={suc} />
      <h3 style={{ textAlign: "center" }}>
        Success, your answers have been submitted
      </h3>
    </div>
  ) : (
    <Container className={css.col} style={{ alignItems: "center" }}>
      <div className={Exa.timer}>
        {/* <Timer durationInSeconds={10} onFinish={()=>{console.log(finalAnswers );setFlag(true);return;}}/> */}
      </div>
      <ProgressBar value={(index / Questions.length) * 100} />
      <form
        className={Exa.form}
        onSubmit={(e) => {
          e.preventDefault();
          if (index === Questions.length - 1) {
            setFlag(true);
            HandleForm();
            return;
          }
          setIndex(index + 1);
          HandleForm();
        }}
      >
        <Container className={`${Exa.width55} ${css.position}`}>
          {Questions[index].type === "Comprehension" ? (
            <>
              <b style={{ wordBreak: "break-word", padding: "15px 0px" }}>
                {Questions[index].prompt}
              </b>
              {Questions[index].ComprehensionQs.map((q, index1) => (
                <React.Fragment key={generateID()}>
                  <p>{`${
                    Questions[index].ComprehensionQs.indexOf(q) + 1
                  } - ${q}`}</p>
                  <RadioButtonsGroup
                    className={css.element}
                    label={generateID() + ""}
                    value={
                      answers.filter(
                        (elem) =>
                          elem.index ===
                          Questions[index].ComprehensionQs.indexOf(q)
                      )[0] === undefined
                        ? null
                        : answers.filter(
                            (elem) =>
                              elem.index ===
                              Questions[index].ComprehensionQs.indexOf(q)
                          )[0].val
                    }
                    options={
                      Questions[index].ComprehensionChoices[
                        Questions[index].ComprehensionQs.indexOf(q)
                      ]
                    }
                    index={Questions[index].ComprehensionQs.indexOf(q)}
                    flag={1}
                    setOption={HandleSubmit}
                  />
                </React.Fragment>
              ))}
            </>
          ) : (
            <>
              <label className={css.element}>Question {index + 1}:</label>
              <p
                style={{ wordBreak: "break-word" }}
              >{`A - ${Questions[index].Question}`}</p>
              {Questions[index].type === "MCQ" ||
              Questions[index].type === "T or F" ? (
                <RadioButtonsGroup
                  className={css.element}
                  label={"Choices"}
                  options={
                    Questions[index].type === "T or F"
                      ? ["T", "F"]
                      : Questions[index].choices
                  }
                  setOption={HandleFinalAnswers}
                  value={
                    finalAnswers[index] === undefined
                      ? null
                      : finalAnswers[index]
                  }
                  flag={0}
                />
              ) : (
                <textarea
                  required
                  className={`${Edu.input} ${Edu.formElement}`}
                  placeholder="Answer"
                  onChange={(e) => setAnswers([e.target.value])}
                  value={answers[0]}
                  type="text"
                ></textarea>
              )}
            </>
          )}
        </Container>
        <Container className={Exa.rowBtn}>
          <div style={{ fontSize: "20px" }}>
            {Questions.length - index - 1} Questions Left
          </div>
          <div>
            <Button
              variant="primary"
              size="lg"
              className="btn-primary"
              onClick={() => setIndex(index - 1)}
            >
              Back
            </Button>
            <Button
              variant="primary"
              size="lg"
              type="submit"
              className="btn-primary"
            >
              {index === Questions.length - 1?"Submit":"Next"}
            </Button>
          </div>
        </Container>
      </form>
      <button onClick={()=>console.log(answers)}>answers</button>
      <button onClick={()=>console.log(finalAnswers)}>final</button>
    </Container>
  );
};

export default Exam;
