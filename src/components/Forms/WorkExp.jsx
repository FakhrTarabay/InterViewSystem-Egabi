import React, { useState } from "react";
import css from "./MainPage.module.css";
import WE from "./WorkExp.module.css";
import "./WorkExp.css";
import Container from "../UI/Container";
import Divider from "@material-ui/core/Divider";
import WorkOutlineRoundedIcon from "@material-ui/icons/WorkOutlineRounded";
import DatePicker from "../UI/DatePicker";
import CheckboxN from "../UI/CheckBox";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
const WorkExp = () => {
  const [isFresh, setIsFresh] = useState(false);
  const [whoEmployer, setWhoEmployer] = useState("");
  const [isEmployer, setIsEmp] = useState(false);
  const [durationFrom, setDurFrom] = useState(new Date());
  const [durationTo, setDurTo] = useState(new Date());
  const [entryPos, setEntryPos] = useState("");
  const [LastSalary, setLastSalary] = useState("");
  const [Exp, setExp] = useState("");
  const [LastPos, setLastPos] = useState("");
  const [ReasonLeave, setReasonLeave] = useState("");

  function HandleClick() {
    const res = {
      fresh: isFresh,
      whoEmployer: whoEmployer,
      isEmployer: isEmployer,
      durationFrom: durationFrom,
      durationTo: durationTo,
      entryPos: entryPos,
      LastSalary: LastSalary,
      Exp: Exp,
      LastPos: LastPos,
      ReasonLeave: ReasonLeave,
    };
    console.log(res);
  }
  return (
    <>
      <Container className={css.row2}>
        <WorkOutlineRoundedIcon className={css.icon} />
        <h3 style={{ marginLeft: "10px" }}>Work Experience</h3>
      </Container>
      <Divider />
      <Container className={css.row}>
        <Container className={css.col20}>
          <WorkOutlineRoundedIcon className={css.iconBig} />
        </Container>
        <Container className={css.col40}>
          <div className={css.form}>
            <div
              className={`${css.input} ${css.formElement}`}
              style={{ border: "none", paddingLeft: "0px" }}
            >
              <CheckboxN
                className={WE.MuiButtonBaseRoot}
                setValue={setIsFresh}
                value={isFresh}
              />
              <label className={css.formElement}>Fresh Graduate</label>
            </div>
            <label className={css.formElement}>Company name</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Company name"
              onChange={(e) => setWhoEmployer(e.target.value)}
              value={whoEmployer}
              type="text"
            ></input>
            <DatePicker
              label="Duration from"
              setValue={setDurFrom}
              value={durationFrom}
            />
            <label className={css.formElement}>Entry position</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Entry position"
              onChange={(e) => setEntryPos(e.target.value)}
              value={entryPos}
              type="text"
            ></input>
            <label className={css.formElement}>
              Last monthly salary in EGP
            </label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Last monthly salary"
              onChange={(e) => setLastSalary(e.target.value)}
              value={LastSalary}
              type="text"
            ></input>
          </div>
        </Container>
        <Container className={css.col40}>
          <div className={css.form}>
            <label className={css.formElement}>Total years of experience</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Enter number of years"
              onChange={(e) => setExp(e.target.value)}
              value={Exp}
              type="text"
            ></input>
            <div
              className={`${css.input} ${css.formElement}`}
              style={{ border: "none", paddingLeft: "0px" }}
            >
              <CheckboxN
                className={WE.MuiButtonBaseRoot}
                setValue={setIsEmp}
                value={isEmployer}
              />
              <label className={css.formElement}>current employer</label>
            </div>
            <DatePicker
              label="Duration to"
              setValue={setDurTo}
              value={durationTo}
            />
            <label className={css.formElement}>Last position held</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Last position held"
              onChange={(e) => setLastPos(e.target.value)}
              value={LastPos}
              type="text"
            ></input>
            <label className={css.formElement}>Reason for leaving</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Reason for leaving"
              onChange={(e) => setReasonLeave(e.target.value)}
              value={ReasonLeave}
              type="text"
            ></input>
          </div>
        </Container>
      </Container>
      <Container className={css.rowBtn}>
        <Button
          variant="primary"
          size="lg"
          className="btn-primary"
          onClick={HandleClick}
        >
          Submit
        </Button>
      </Container>
    </>
  );
};

export default WorkExp;
