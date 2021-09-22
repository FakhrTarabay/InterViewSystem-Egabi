import React from 'react'
import Exa from "./Exam.module.css";

const TextArea = ({index,finalAnswers,HandleFinalAnswers}) => {
    return (
        <>
             <textarea
                  required
                  className={`${Exa.input} ${Exa.formElement}`}
                  placeholder="Answer"
                  onChange={(e) => HandleFinalAnswers(e.target.value)}
                  value={finalAnswers[index]}
                  type="text"
                ></textarea>   
        </>
    )
}

export default TextArea
