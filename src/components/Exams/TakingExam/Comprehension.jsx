import React from 'react'
import RadioButtonsGroup from "../../UI/RadioGroup";
import Exa from "./Exam.module.css";

const Comprehension = ({Questions,index,answers,HandleSubmit}) => {
    function generateID() {
        return Math.floor(Math.random() * 100000000);
      }
    return (
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
              className={Exa.element}
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
    )
}

export default Comprehension
