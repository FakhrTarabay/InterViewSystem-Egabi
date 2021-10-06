import React from "react";
import RadioButtonsGroup from "../../UI/RadioGroup";
import Exa from "./Exam.module.css";

const Comprehension = ({ Questions, index, answers, HandleSubmit }) => {
  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }
  return (
    <>
      <b style={{ wordBreak: "break-word", padding: "15px 0px" }}>
        {Questions[index].prompt}
      </b>
      {Questions[index].ComprehensionQs.map((q, qIndex) => (
        <React.Fragment key={generateID()}>
          <p>{`${qIndex + 1} - ${q}`}</p>

          <RadioButtonsGroup
            className={Exa.element}
            label={generateID() + ""}
            value={
              answers.filter((elem) => elem.index === qIndex)[0] === undefined
                ? null
                : answers.filter((elem) => elem.index === qIndex)[0].val
            }
            options={Questions[index].ComprehensionChoices[qIndex]}
            index={qIndex}
            flag={1}
            setOption={HandleSubmit}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default Comprehension;
