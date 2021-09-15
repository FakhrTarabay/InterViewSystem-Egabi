import React from 'react'
import MCQC from "./MCQ.module.css"
const MCQ = ({setQuestion,Question,setNumChoices,numChoices,createChoices}) => {
    return (
        <>
        <label className={MCQC.formElement}>Question</label>
              <input
                multiple
                required
                className={`${MCQC.input} ${MCQC.formElement}`}
                placeholder="Set Question"
                onChange={(e) => setQuestion(e.target.value)}
                value={Question}
                // pattern="[a-zA-Z]{1,}"
                type="text"
              ></input>
              <label className={MCQC.formElement}>Number of choices</label>
              <input
                required
                className={`${MCQC.input} ${MCQC.formElement}`}
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
    )
}

export default MCQ
