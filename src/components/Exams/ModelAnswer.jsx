import React from 'react'
import Edu from "../Forms/Edu.module.css";

const ModelAnswer = ({setQAnswer,QuestionType,qAnswer}) => {
    return (
        <>
            <label className={Edu.formElement}>Model Answer</label>
          <input
            required
            className={`${Edu.input} ${Edu.formElement}`}
            placeholder="Set model answer"
            onChange={(e) => setQAnswer(e.target.value)}
            pattern={
              QuestionType === "T or F" ? "^(T|F|t|f)$" : "[a-zA-Z0-9]{1,}"
            }
            value={qAnswer}
            type="text"
          ></input>
        </>
    )
}

export default ModelAnswer
