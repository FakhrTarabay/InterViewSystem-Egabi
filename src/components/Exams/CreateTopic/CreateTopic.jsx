import React, { useState } from "react";
import Container from "../../UI/Container";
import css from "./CreateTopic.module.css";
import RadioButtonsGroup from "../../UI/RadioGroup";
import { Button } from "@material-ui/core";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import IconButton from "@material-ui/core/IconButton";
import Preview from "./Preview";
import SelectQ from "./SelectQ";
import MCQ from "../MCQ/MCQ";
import ComprehensionComp from "../Comprehension/ComprehensionComp";
import UpdateQBtn from "./UpdateQBtn";
import ModelAnswer from "./ModelAnswer";
import OtherQs from "./OtherQs";
import Alerts from "../../UI/Alerts";

const CreateTopic = () => {
  const [flag, setFlag] = useState(0);
  const [topicName, setTopicName] = useState("");
  const [Questions, setQuestions] = useState([]);
  const [QuestionType, setQuestionType] = useState("MCQ");
  const [Question, setQuestion] = useState("");
  const [numChoices, setNumChoices] = useState("");
  const [Options, setOptions] = useState([]);
  const [qAnswer, setQAnswer] = useState("");
  const [index, setIndex] = useState(-1);
  const [selectedQ, setSelectedQ] = useState("");
  const [Comprehension, setComprehension] = useState("");
  const [ComprehensionQs, setComprehensionQs] = useState([]);
  const [ComprehensionAs, setComprehensionAs] = useState([]);
  const [ComprehensionChoices, setComprehensionChoices] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function HandleDelete() {
    const res = [];
    for (let elem of Questions) {
      if (elem.number !== index + 1) {
        res.push(elem);
      }
    }
    setQuestions([...res]);
    HandleReset();
    setComprehension("");
    setComprehensionChoices([]);
    setComprehensionQs([]);
    setComprehensionAs([]);
    setMessage("Question Deleted");
    setOpen(true);
  }

  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }

  function HandleReset() {
    setQuestion("");
    setQAnswer("");
    setOptions([]);
    setNumChoices("");
    setIndex(-1);
  }

  function HandleChoicesReset(value) {
    setQuestionType(value);
    HandleReset();
    setComprehension("");
    setComprehensionChoices([]);
    setComprehensionQs([]);
    setComprehensionAs([]);
  }

  function HandleCompQuestion() {
    setComprehensionQs((prevQuestions) => [...prevQuestions, Question]);
    setComprehensionChoices((prevChoices) => [...prevChoices, Options]);
    setComprehensionAs((prevAnswers) => [...prevAnswers, qAnswer]);
    HandleReset();
  }

  function delChoice(i) {
    setNumChoices(numChoices - 1);
    const res = Options;
    res.splice(i, 1);
    setOptions([...res]);
  }

  function HandleSubmit() {
    if (QuestionType === "Comprehension") {
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        {
          typeId: QuestionType,
          number: prevQuestions.length + 1,
          paragraphPrompt: Comprehension,
          paragraphQuestions: ComprehensionQs,
          paragraphChoices: ComprehensionChoices,
          paragraphAnswers: ComprehensionAs,
          topic: topicName,
        },
      ]);
    } else {
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        {
          typeId: QuestionType,
          number: prevQuestions.length + 1,
          questionHeader: Question,
          choices: Options,
          modelAnswer: qAnswer,
          topic: topicName,
        },
      ]);
    }
    setMessage("Question submitted");
    setOpen(true);
    HandleReset();
  }
  function setPreView(q) {
    setIndex(q.number - 1);
    setQuestionType(q.typeId);
    setQuestion(q.questionHeader);
    setQAnswer(q.modelAnswer);
    if (q.typeId === "MCQ") {
      setNumChoices(q.choices.length);
      setOptions(q.choices);
    }
    if (q.typeId === "Comprehension") {
      setQuestion("");
      setQAnswer("");
      setNumChoices(0);
      setOptions([]);
      setComprehension(q.paragraphPrompt);
      setComprehensionQs(q.paragraphQuestions);
      setComprehensionChoices(q.paragraphChoices);
      setComprehensionAs(q.paragraphAnswers);
    }
  }
  function HandleUpdateCompQ() {
    if (Question.length !== 0 || qAnswer.length !== 0) {
      const res = Questions;
      let i = Questions[index].paragraphQuestions.indexOf(selectedQ);
      let CompQs = Questions[index].paragraphQuestions;
      let CompChoices = Questions[index].paragraphChoices;
      let CompAs = Questions[index].paragraphAnswers;
      CompQs[i] = Question;
      CompChoices[i] = Options;
      CompAs[i] = qAnswer;
      res.splice(index, 1, {
        typeId: QuestionType,
        number: index + 1,
        paragraphPrompt: Comprehension,
        paragraphQuestions: CompQs,
        paragraphChoices: CompChoices,
        paragraphAnswers: CompAs,
      });
      setQuestions([...res]);
      setMessage("Question updated");
      setOpen(true);
    } else {
      console.log("error");
    }
  }
  function createChoices() {
    const choices = [];
    for (let i = 0; i < numChoices; i++) {
      choices.push(
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <input
            required
            className={`${css.input} ${css.formElement}`}
            onChange={(e) => setOptionsFun(e.target.value, i)}
            placeholder={`Choice ${i + 1}`}
            value={Options[i] === undefined ? "" : Options[i]}
            type="text"
          ></input>
          <IconButton onClick={() => delChoice(i)}>
            <IndeterminateCheckBoxIcon />
          </IconButton>
        </div>
      );
    }
    return choices;
  }
  function setOptionsFun(entry, index) {
    const res = Options;
    res.splice(index, 1, entry);
    setOptions([...res]);
  }
  function updateQuestion(index) {
    const res = Questions;
    if (Questions[index].typeId === "Comprehension") {
      res.splice(index, 1, {
        typeId: QuestionType,
        number: index + 1,
        paragraphPrompt: Comprehension,
        paragraphQuestions: ComprehensionQs,
        paragraphChoices: ComprehensionChoices,
        paragraphAnswers: ComprehensionAs,
      });
    } else {
      res.splice(index, 1, {
        typeId: QuestionType,
        number: index + 1,
        questionHeader: Question,
        choices: Options,
        modelAnswer: qAnswer,
      });
    }
    setQuestions([...res]);
    setMessage("Question updated");
    setOpen(true);
    HandleReset();
  }
  return (
    <>
      <Container className={css.position}>
        <b>Create Question</b>
        <form
          className={css.col50}
          style={{ width: "100%" }}
          onSubmit={(e) => {
            e.preventDefault();
            if (flag === 1) {
              updateQuestion(index);
            } else if (flag === 0) {
              HandleSubmit();
            } else {
              HandleCompQuestion();
            }
          }}
        >
          <label className={css.formElement}>Enter topic name</label>
          <input
            required
            className={`${css.input} ${css.formElement}`}
            placeholder="Enter topic name"
            onChange={(e) => setTopicName(e.target.value)}
            value={topicName}
            type="text"
          ></input>
          <RadioButtonsGroup
            className={css.element}
            label={"Pick a question type"}
            options={["MCQ", "T or F", "Writing", "Comprehension"]}
            setOption={HandleChoicesReset}
            value={QuestionType}
          />
          {QuestionType === "MCQ" ? (
            <>
              <MCQ
                setQuestion={setQuestion}
                setNumChoices={setNumChoices}
                createChoices={createChoices}
                Question={Question}
                numChoices={numChoices}
              />
            </>
          ) : QuestionType === "Comprehension" ? (
            <>
              <ComprehensionComp
                setComprehension={setComprehension}
                createChoices={createChoices}
                setSelectedQ={setSelectedQ}
                setQuestion={setQuestion}
                setNumChoices={setNumChoices}
                ComprehensionQs={ComprehensionQs}
                selectedQ={selectedQ}
                Question={Question}
                numChoices={numChoices}
                Comprehension={Comprehension}
              />
            </>
          ) : (
            <OtherQs setQuestion={setQuestion} Question={Question} />
          )}
          <ModelAnswer
            setQAnswer={setQAnswer}
            QuestionType={QuestionType}
            qAnswer={qAnswer}
          />
          {QuestionType === "Comprehension" && (
            <div>
              <Button
                className={`${css.element}`}
                color="primary"
                variant="contained"
                type="submit"
                onClick={() => setFlag(2)}
              >
                Set Question
              </Button>
            </div>
          )}
          <UpdateQBtn
            index={index}
            QuestionType={QuestionType}
            HandleUpdateCompQ={HandleUpdateCompQ}
            setFlag={setFlag}
          />
          <Button
            className={css.element}
            variant="contained"
            color="primary"
            type={QuestionType === "Comprehension" ? "button" : "submit"}
            onClick={
              QuestionType === "Comprehension"
                ? () => HandleSubmit()
                : () => setFlag(0)
            }
          >
            {QuestionType === "Comprehension"
              ? "Submit prompt"
              : "Submit Question"}
          </Button>
        </form>
      </Container>
      <Container className={`${css.width40} ${css.position}`}>
        <Preview
          QuestionType={QuestionType}
          Comprehension={Comprehension}
          ComprehensionQs={ComprehensionQs}
          ComprehensionChoices={ComprehensionChoices}
          ComprehensionAs={ComprehensionAs}
          qAnswer={qAnswer}
          setQuestion={setQuestion}
          Question={Question}
          Options={Options}
          generateID={generateID}
        />
      </Container>
      <Container className={`${css.width10} ${css.position}`}>
        <SelectQ
          Questions={Questions}
          setPreView={setPreView}
          HandleDelete={HandleDelete}
        />
      </Container>
      <Alerts setOpen={setOpen} open={open} message={message} />
    </>
  );
};

export default CreateTopic;
