import React from 'react'
import css from "./CreateTopic.module.css";
import { Button } from "@material-ui/core";

const UpdateQBtn = ({index,QuestionType,HandleUpdateCompQ,setFlag}) => {
    return (
        <>
            {index !== -1 &&
            (QuestionType === "Comprehension" ? (
              <Button
                className={css.element}
                color="secondary"
                variant="contained"
                onClick={HandleUpdateCompQ}
              >
                update selected question
              </Button>
            ) : (
              <Button
                className={css.element}
                variant="contained"
                color="secondary"
                type="submit"
                onClick={() => setFlag(1)}
              >
                Update Question {index + 1}
              </Button>
            ))}  
        </>
    )
}

export default UpdateQBtn
