import React, { useState } from "react";
import Container from "../UI/Container";
import TextFields from "../UI/TextField";
import css from "./CreateTopic.module.css";
import Selector from "../UI/Selector";

import RadioButtonsGroup from "../UI/RadioGroup";
import { Button } from "@material-ui/core";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import IconButton from "@material-ui/core/IconButton";
import Edu from "../Forms/Edu.module.css";
const CreateTopic = () => {
  const [Questions, setQuestions] = useState([
    {
      number: 1,
      Question: "98",
      type: "MCQ",
      choices: [1],
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
  const [QuestionType, setQuestionType] = useState("MCQ");
  const [Question, setQuestion] = useState("");
  const [numChoices, setNumChoices] = useState(0);
  const [Options, setOptions] = useState([]);
  const [qAnswer, setQAnswer] = useState("");
  const [index, setIndex] = useState(-1);
  const [selectedQ, setselectedQ] = useState("")
  const [Comprehension, setComprehension] = useState("");
  const [ComprehensionQs, setComprehensionQs] = useState([]);
  const [ComprehensionAs, setComprehensionAs] = useState([]);
  const [ComprehensionChoices, setComprehensionChoices] = useState([]);

  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }

  function HandleReset() {
    setQuestion("");
    setQAnswer("");
    setOptions([]);
    setNumChoices(0);
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
          type: QuestionType,
          number: prevQuestions.length + 1,
          prompt: Comprehension,
          ComprehensionQs: ComprehensionQs,
          ComprehensionChoices: ComprehensionChoices,
          ComprehensionAs: ComprehensionAs,
        },
      ]);
    } else {
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        {
          type: QuestionType,
          number: prevQuestions.length + 1,
          Question: Question,
          choices: Options,
          answer: qAnswer,
        },
      ]);
    }
    HandleReset();
  }
  function setPreView(q) {
    setIndex(q.number - 1);
    setQuestionType(q.type);
    setQuestion(q.Question);
    setQAnswer(q.answer);
    if (q.type === "MCQ") {
      setNumChoices(q.choices.length);
      setOptions(q.choices);
    }
    if (q.type === "Comprehension") {
      setQuestion("");
      setQAnswer("");
      setComprehension(q.prompt);
      setComprehensionQs(q.ComprehensionQs);
      setComprehensionChoices(q.ComprehensionChoices);
      setComprehensionAs(q.ComprehensionAs);
    }
  }
  function HandleUpdateCompQ(){
    if(selectedQ.length!==0){
      const res = Questions;
      let i = Questions[index].ComprehensionQs.indexOf(selectedQ)
      let CompQs = Questions[index].ComprehensionQs
      let CompChoices = Questions[index].ComprehensionChoices
      let CompAs = Questions[index].ComprehensionAs
      CompQs[i] = Question
      CompChoices[i] = Options
      CompAs[i] = qAnswer
      res.splice(index,1,{
          type: QuestionType,
          number: index + 1,
          prompt: Comprehension,
          ComprehensionQs: CompQs,
          ComprehensionChoices: CompChoices,
          ComprehensionAs: CompAs,
      })
      setQuestions([...res]);
      // HandleReset();
    }else{console.log("error")}
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
            className={`${Edu.input} ${Edu.formElement}`}
            onChange={(e) => setOptionsFun(e.target.value, i)}
            placeholder={`Choice ${i + 1}`}
            value={Options[i]}
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
    if (Questions[index].type === "Comprehension") {
      res.splice(index, 1, {
        type: QuestionType,
        number: index + 1,
        prompt: Comprehension,
        ComprehensionQs: ComprehensionQs,
        ComprehensionChoices: ComprehensionChoices,
        ComprehensionAs: ComprehensionAs,
      });
    } else {
      res.splice(index, 1, {
        type: QuestionType,
        number: index + 1,
        Question: Question,
        choices: Options,
        answer: qAnswer,
      });
    }
    console.log(res)
    setQuestions([...res]);
    HandleReset();
  }
  return (
    <>
      <Container className={css.position}>
        <b>Create Question</b>
        <form
          className={Edu.col50}
          style={{ width: "100%" }}
          onSubmit={(e) => {
            e.preventDefault();
            HandleSubmit();
          }}
        >
          <RadioButtonsGroup
            className={css.element}
            label={"Pick a question type"}
            options={["MCQ", "T or F", "Writing", "Comprehension"]}
            setOption={HandleChoicesReset}
            value={QuestionType}
          />
          {QuestionType === "MCQ" ? (
            <>
              <label className={Edu.formElement}>Question</label>
              <input
                multiple
                required
                className={`${Edu.input} ${Edu.formElement}`}
                placeholder="Set Question"
                onChange={(e) => setQuestion(e.target.value)}
                value={Question}
                pattern="[a-zA-Z]{1,}"
                type="text"
              ></input>
              <label className={Edu.formElement}>Number of choices</label>
              <input
                required
                className={`${Edu.input} ${Edu.formElement}`}
                placeholder="Set number of choices"
                onChange={(e) => setNumChoices(e.target.value)}
                value={numChoices}
                pattern="[0-9]{1,}"
                type="number"
                min="0"
                max="99"
              ></input>
              {createChoices().map((element) => element)}
            </>
          ) : QuestionType === "Comprehension" ? (
            <>
              <input
                required
                className={`${Edu.input} ${Edu.formElement}`}
                placeholder="Set comprehension prompt"
                onChange={(e) => setComprehension(e.target.value)}
                value={Comprehension}
                type="text"
              ></input>
              <Selector
                className={`${Edu.input} ${Edu.formElement}`}
                style={{ margin: "0px" }}
                items={ComprehensionQs}
                setValue={setselectedQ}
                value={selectedQ}
                label="Question:"
                help="Pick Question"
              />
              <label className={Edu.formElement}>Question</label>
              <input
                // required
                className={`${Edu.input} ${Edu.formElement}`}
                placeholder="Set Question"
                onChange={(e) => setQuestion(e.target.value)}
                value={Question}
                pattern="[a-zA-Z]{1,}"
                type="text"
              ></input>
              <label className={Edu.formElement}>Number of choices</label>
              <input
                // required
                className={`${Edu.input} ${Edu.formElement}`}
                placeholder="Set number of choices"
                onChange={(e) => setNumChoices(e.target.value)}
                value={numChoices}
                pattern="[0-9]{2}"
                type="number"
                min="0"
                max="99"
              ></input>
              {createChoices().map((element) => element)}
            </>
          ) : (
            <>
              <label className={Edu.formElement}>Question</label>
              <input
                // required
                className={`${Edu.input} ${Edu.formElement}`}
                placeholder="Set Question"
                onChange={(e) => setQuestion(e.target.value)}
                value={Question}
                pattern="[a-zA-Z]{1,}"
                type="text"
              ></input>
            </>
          )}
          <label className={Edu.formElement}>Model Answer</label>
          <input
            required
            className={`${Edu.input} ${Edu.formElement}`}
            placeholder="Set model answer"
            onChange={(e) => setQAnswer(e.target.value)}
            pattern={QuestionType==='T or F'?'(T|F|t|f)':"[a-zA-Z0-9]{1,}"}
            value={qAnswer}
            type="text"
          ></input>
          {QuestionType === "Comprehension" && (
            <div>
              <Button
                className={`${css.btn} ${css.element}`}
                color="primary"
                variant="contained"
                onClick={HandleUpdateCompQ}
              >
                update selected question
              </Button>
              <Button
                className={`${css.btn} ${css.element}`}
                color="primary"
                variant="contained"
                onClick={HandleCompQuestion}
              >
                Set Question
              </Button>
            </div>
          )}
          {index !== -1 && (
            <Button
              className={css.element}
              variant="contained"
              color="secondary"
              onClick={() => updateQuestion(index)}
            >
              Update Question {index + 1}
            </Button>
          )}
          <Button
            className={css.element}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit Question
          </Button>
        </form>
      </Container>
      {/* done preview*/}
      <Container className={`${css.width40} ${css.position}`}>
        <b>Question Preview</b>
        {QuestionType === "Comprehension" ? (
          <>
            <label className={css.element}>Comprehension prompt:</label>
            <b style={{ wordBreak: "break-word" }}>{Comprehension}</b>
            <label>Comprehension question/s:</label>
            {ComprehensionQs.map((q) => (
              <React.Fragment key={generateID()}>
                <p>{`${ComprehensionQs.indexOf(q) + 1} - ${q}`}</p>
                <RadioButtonsGroup
                  className={css.element}
                  label={"Choices"}
                  options={ComprehensionChoices[ComprehensionQs.indexOf(q)]}
                  disabled={true}
                />
                <p>{`Model Answer = ${
                  ComprehensionAs[ComprehensionQs.indexOf(q)]
                }`}</p>
              </React.Fragment>
            ))}
          </>
        ) : (
          <>
            <label className={css.element}>Question:</label>
            <p style={{ wordBreak: "break-word" }}>{`A - ${Question}`}</p>
            {QuestionType === "MCQ" || QuestionType === "T or F" ? (
              <RadioButtonsGroup
                className={css.element}
                label={"Choices"}
                options={QuestionType === "T or F" ? ["T", "F"] : Options}
                disabled={true}
              />
            ) : (
              <TextFields
                disabled={true}
                setTxtFunc={setQuestion}
                multiline={true}
              />
            )}
            <p>{`Model Answer = ${qAnswer}`}</p>
          </>
        )}
      </Container>
      <Container className={`${css.width10} ${css.position}`}>
        <b style={{ textAlign: "center" }}>Created Questions</b>
        {Questions.map((q) => (
          <Button onClick={() => setPreView(q)} key={q.number}>
            {/* {console.log(q)} */}
            {q.number}
          </Button>
        ))}
      </Container>
    </>
  );
};

export default CreateTopic;
