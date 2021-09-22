import React, { useState } from "react";
import ProgressBar from "../../UI/ProgressBar";
import Container from "../../UI/Container";
import Exa from "./Exam.module.css";
import Lottie from "lottie-react";
import suc from "../../assets/lottie_app/successfully1.json";
import { Timer } from "react-countdown-clock-timer";
import StartingPage from "./startingPage";
import { useSelector, useDispatch } from "react-redux";
import { CounterActions } from "../../../store/Counter";
import { useBeforeunload } from "react-beforeunload";
import Comprehension from "./Comprehension";
import MCQTF from "./MCQTF";
import TextArea from "./TextArea";
import BtnArea from "./BtnArea";
const Exam = () => {
  const dispatch = useDispatch();
  dispatch(CounterActions.startTime());

  const timer = useSelector((state) => state.time);
  const [flag, setFlag] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [index, setIndex] = useState(0);
  const answers = useSelector((state) => state.answers);
  const finalAnswers = useSelector((state) => state.finalAnswers);
  const Questions = useSelector((state) => state.Questions);

  useBeforeunload((e) => {
    e.preventDefault();
    dispatch(CounterActions.getTime());
    dispatch(CounterActions.setFinalAnswers(finalAnswers));
  });

  function HandleSubmit(val, index) {
    dispatch(CounterActions.setAnswers({ val: val, index: index, flag: 1 }));
  }

  function HandleFinalAnswers(val) {
    dispatch(
      CounterActions.setFinalAnswers({ val: val, index: index, flag: 1 })
    );
  }

  function HandleForm() {
    if (Questions[index].type === "Comprehension") {
      dispatch(CounterActions.setFinalAnswers({ val: answers, flag: 0 }));
      dispatch(CounterActions.setAnswers({ flag: 0 }));
    }
  }

  return !isStart ? (
    <StartingPage isStart={setIsStart} />
  ) : flag ? (
    <div style={{ width: "400px", alignSelf: "center" }}>
      {console.log(finalAnswers)}
      <Lottie animationData={suc} />
      <h3 style={{ textAlign: "center" }}>
        Success, your answers have been submitted
      </h3>
    </div>
  ) : (
    <Container className={Exa.col} style={{ alignItems: "center" }}>
      <div className={Exa.timer}>
        <Timer
          durationInSeconds={timer}
          onFinish={() => {
            setFlag(true);
            dispatch(CounterActions.reset());
            return;
          }}
        />
      </div>
      <ProgressBar value={(index / Questions.length) * 100} />
      <form
        className={Exa.form}
        onSubmit={(e) => {
          e.preventDefault();
          if (index === Questions.length - 1) {
            setFlag(true);
            HandleForm();
            dispatch(CounterActions.reset());
            return;
          }
          setIndex(index + 1);
        }}
      >
        <Container className={`${Exa.width55} ${Exa.position}`}>
          {Questions[index].type === "Comprehension" ? (
            <Comprehension
              HandleSubmit={HandleSubmit}
              index={index}
              answers={answers}
              Questions={Questions}
            />
          ) : (
            <>
              <label className={Exa.element}>Question {index + 1}:</label>
              <p
                style={{ wordBreak: "break-word" }}
              >{`A - ${Questions[index].Question}`}</p>
              {Questions[index].type === "MCQ" ||
              Questions[index].type === "T or F" ? (
                <MCQTF
                  index={index}
                  Questions={Questions}
                  HandleFinalAnswers={HandleFinalAnswers}
                  finalAnswers={finalAnswers}
                />
              ) : (
                <TextArea
                  index={index}
                  finalAnswers={finalAnswers}
                  HandleFinalAnswers={HandleFinalAnswers}
                />
              )}
            </>
          )}
        </Container>
        <Container className={Exa.rowBtn}>
          <BtnArea index={index} setIndex={setIndex} Questions={Questions} />
        </Container>
      </form>
    </Container>
  );
};

export default Exam;
