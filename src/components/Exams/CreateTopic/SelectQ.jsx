import React, { useState } from "react";
import { Button } from "@material-ui/core";
import css from "./CreateTopic.module.css";
import axios from "axios";
import Alerts from "../../UI/Alerts";

const SelectQ = ({ Questions, setPreView, HandleDelete }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  async function send(q) {
    try {
      const num = { MCQ: "1", Comprehension: "4", "T or F": "2", Writing: "3" };
      for (let qs of q) {
        if (qs.typeId === "Writing") {
          qs.choices = ["text question"];
        }
        const res = await axios.post("http://10.1.2.24:3200/questions", {
          ...qs,
          typeId: num[qs.typeId],
        });
        console.log(res.data.operationResult);
      }
      setMessage("Final submit done");
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  }

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
        onClick={() => send(Questions)}
      >
        Final Submit
      </Button>
      <Alerts setOpen={setOpen} open={open} message={message} />
    </>
  );
};

export default SelectQ;
