import React from 'react'
import RadioButtonsGroup from "../../UI/RadioGroup";
import Exa from "./Exam.module.css";

const MCQTF = ({index,Questions,HandleFinalAnswers,finalAnswers}) => {
    return (
        <>
             <RadioButtonsGroup
                  className={Exa.element}
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
        </>
    )
}

export default MCQTF
