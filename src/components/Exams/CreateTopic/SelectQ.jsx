import React from "react";
import { Button } from "@material-ui/core";
import css from "./CreateTopic.module.css";

const SelectQ = ({ Questions, setPreView, HandleDelete }) => {
  return (
    <>
      <b style={{ textAlign: "center" }}>Created Questions</b>
      {Questions.map((q) => (
        <Button onClick={() => setPreView(q)} key={q.number}>
          {q.number}
        </Button>
      ))}
      <Button
        className={`${css.element}`}
        color="primary"
        variant="contained"
        onClick={HandleDelete}
      >
        Delete Q
      </Button>
      <Button
        className={`${css.element}`}
        color="primary"
        variant="contained"
        onClick={()=>console.log(Questions)}
      >
        Final Submit
      </Button>
    </>
  );
};

export default SelectQ;
