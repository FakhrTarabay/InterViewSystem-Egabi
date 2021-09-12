import React, { useState } from "react";
import ProgressBar from "../../UI/ProgressBar";
import Container from "../../UI/Container";
import RadioButtonsGroup from "../../UI/RadioGroup";
import Button from "react-bootstrap/Button";
import Edu from "../../Forms/Edu.module.css";
import Timer from "react-compound-timer/build";
import css from "../CreateTopic.module.css";
import Exa from "./Exam.module.css";
const Exam = () => {
  const [index, setIndex] = useState(3);
  const [answers, setAnswers] = useState([])
  function HandleSubmit(val,index){
    let res = answers
    for(let elem in res){
      if(res[elem].index===index){
        res[elem].val=val
        setAnswers([...res])
        return
      }
    }
    res.push({index:index,val:val})
    setAnswers([...res])
  }

  function HandleForm(){
    if(Questions[index].type==='Comprehension'){
      console.log(answers.length)
      if(Questions[index].ComprehensionQs.length===answers.length){
        console.log('yes')
        setIndex(index-1)
      }
      else{
        console.log('no')
      }
    }
  }

  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }
  const [Questions] = useState([
    {
      number: 1,
      Question: "98",
      type: "MCQ",
      choices: [1, 2, 3, 4, 5],
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
  return (
    <Container className={css.col} style={{ alignItems: "center" }}>
      <div className={Exa.timer}>
        <Timer initialTime={600 * 1000} direction="backward" >
          {() => (
            <>
            {/* {(<Timer.Seconds />._owner.memoizedState.s===0)?
            console.log(<Timer.Seconds />._owner.memoizedState.s):console.log("asda")} */}
            <Timer.Minutes /> : <Timer.Seconds />
            </>
          )}
        </Timer>
      </div>
      <ProgressBar value={((index + 1) / Questions.length) * 100} />
      <form className={Exa.form} onSubmit={e=>{
        e.preventDefault();
        HandleForm();
      }}>
        <Container className={`${Exa.width70} ${css.position}`}>
          {Questions[index].type === "Comprehension" ? (
            <>
              <b style={{ wordBreak: "break-word", padding: "15px 0px" }}>
                {Questions[index].prompt}
              </b>
              {Questions[index].ComprehensionQs.map((q) => (
                <React.Fragment key={generateID()}>
                  <p>{`${
                    Questions[index].ComprehensionQs.indexOf(q) + 1
                  } - ${q}`}</p>
                  <RadioButtonsGroup
                    className={css.element}
                    label={"Choices"}
                    value={answers[Questions[index].ComprehensionQs.indexOf(q)]===undefined?null:answers[Questions[index].ComprehensionQs.indexOf(q)].val}
                    options={
                      Questions[index].ComprehensionChoices[
                        Questions[index].ComprehensionQs.indexOf(q)
                      ]
                    }
                    index = {Questions[index].ComprehensionQs.indexOf(q)}
                    flag={1}
                    setOption = {HandleSubmit}
                  />
                </React.Fragment>
              ))}
            </>
          ) : (
            <>
              <label className={css.element}>Question {index+1}:</label>
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
                  disabled={true}
                />
              ) : (
                <textarea
                  required
                  className={`${Edu.input} ${Edu.formElement}`}
                  placeholder="Answer"
                  // onChange={(e) => setComprehension(e.target.value)}
                  // value={Comprehension}
                  type="text"
                ></textarea>
              )}
            </>
          )}
        </Container>
        <Container className={Exa.rowBtn}>
            <div style={{fontSize:'20px'}}>{Questions.length - index} Questions Left</div>
            <div>

            <Button
                variant="primary"
                size="lg"
                className="btn-primary"
              >
                Back
              </Button>
              <Button
                variant="primary"
                size="lg"
                type="submit"
                className="btn-primary"
              >
                Next
              </Button>
            </div>
        </Container>
      </form>
    </Container>
  );
};

export default Exam;
