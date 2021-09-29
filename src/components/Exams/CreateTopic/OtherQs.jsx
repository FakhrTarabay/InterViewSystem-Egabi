import React from 'react'
import Edu from "../../Forms/Edu.module.css";

const OtherQs = ({setQuestion,Question}) => {
    return (
        <>
           <label className={Edu.formElement}>Question</label>
              <input
                required
                className={`${Edu.input} ${Edu.formElement}`}
                placeholder="Set Question"
                onChange={(e) => setQuestion(e.target.value)}
                value={Question}
                pattern="[a-zA-Z0-9?-_!@#$%^&*()+''? ><.,]{1,}"
                type="text"
              ></input>  
        </>
    )
}

export default OtherQs
