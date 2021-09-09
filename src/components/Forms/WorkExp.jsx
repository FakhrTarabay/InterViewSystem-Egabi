import React, { useState } from "react";
import WE from "./WorkExp.module.css";
import "./general.css";
import Container from "../UI/Container";
import Divider from "@material-ui/core/Divider";
import WorkOutlineRoundedIcon from "@material-ui/icons/WorkOutlineRounded";
import DatePicker from "../UI/DatePicker";
import CheckboxN from "../UI/CheckBox";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from "react-router-dom";
import Lottie from "lottie-react";
import exp from "../assets/lottie_app/work.json";
const WorkExp = () => {
  const [routingBack, setRoutingBack] = useState(false);
  const [routingFront, setRoutingFront] = useState(false);
  const [isFresh, setIsFresh] = useState(false);
  const [whoEmployer, setWhoEmployer] = useState("");
  const [isEmployer, setIsEmp] = useState(false);
  const [durationFrom, setDurFrom] = useState(null);
  const [durationTo, setDurTo] = useState(null);
  const [entryPos, setEntryPos] = useState("");
  const [LastSalary, setLastSalary] = useState("");
  const [Exp, setExp] = useState("");
  const [LastPos, setLastPos] = useState("");
  const [ReasonLeave, setReasonLeave] = useState("");

  if (routingBack) {
    return <Redirect push to="/Edu" />;
  }
  if (routingFront) {
    return <Redirect push to="/Q" />;
  }

  // function HandleClick() {
  //   const res = {
  //     fresh: isFresh,
  //     whoEmployer: whoEmployer,
  //     isEmployer: isEmployer,
  //     durationFrom: durationFrom,
  //     durationTo: durationTo,
  //     entryPos: entryPos,
  //     LastSalary: LastSalary,
  //     Exp: Exp,
  //     LastPos: LastPos,
  //     ReasonLeave: ReasonLeave,
  //   };
  //   console.log(res);
  // }
  return (
    <>
      <Container className={WE.rowCenter}>
        <WorkOutlineRoundedIcon className={WE.icon} />
        <h3 className={WE.h3}>Work Experience</h3>
      </Container>
      <Divider className={WE.Divider} />
      <Container className={WE.row}>
        <Container className={WE.col23}>
          <Lottie animationData={exp}/>
        </Container>
        <form onSubmit={e=>{
          e.preventDefault()
          console.log('hereExp')
          setRoutingFront(true)
        }} className={WE.form}>
          <Container className={WE.col50}>
            <div
              className={`${WE.input} ${WE.formElement}`}
              style={{ border: "none", paddingLeft: "0px" }}
            >
              <CheckboxN
                className={WE.MuiButtonBaseRoot}
                setValue={setIsFresh}
                value={isFresh}
              />
              <label className={WE.formElement}>Fresh Graduate</label>
            </div>
            <label className={WE.formElement}>Company name</label>
            <input
              required
              pattern="[a-zA-Z]{1,}"
              className={`${WE.input} ${WE.formElement}`}
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
            <label className={WE.formElement}>Entry position</label>
            <input
              required
              pattern="[a-zA-Z]{1,}"
              className={`${WE.input} ${WE.formElement}`}
              placeholder="Entry position"
              onChange={(e) => setEntryPos(e.target.value)}
              value={entryPos}
              type="text"
            ></input>
            <label className={WE.formElement}>Last monthly salary in EGP</label>
            <input
              required
              pattern="[0-9]{1,}"
              className={`${WE.input} ${WE.formElement}`}
              placeholder="Last monthly salary"
              onChange={(e) => setLastSalary(e.target.value)}
              value={LastSalary}
              type="text"
            ></input>
          </Container>
          <Container className={WE.col50}>
            <label className={WE.formElement}>Total years of experience</label>
            <input
              required
              pattern="[0-9]{1,}"
              className={`${WE.input} ${WE.formElement}`}
              placeholder="Enter number of years"
              onChange={(e) => setExp(e.target.value)}
              value={Exp}
              type="text"
            ></input>
            <div
              className={`${WE.input} ${WE.formElement}`}
              style={{ border: "none", paddingLeft: "0px" }}
            >
              <CheckboxN
                className={WE.MuiButtonBaseRoot}
                setValue={setIsEmp}
                value={isEmployer}
              />
              <label className={WE.formElement}>current employer</label>
            </div>
            <DatePicker
              label="Duration to"
              setValue={setDurTo}
              value={durationTo}
            />
            <label className={WE.formElement}>Last position held</label>
            <input
              required
              pattern="[a-zA-Z]{1,}"
              className={`${WE.input} ${WE.formElement}`}
              placeholder="Last position held"
              onChange={(e) => setLastPos(e.target.value)}
              value={LastPos}
              type="text"
            ></input>
            <label className={WE.formElement}>Reason for leaving</label>
            <input
              required
              pattern="[a-zA-Z]{1,}"
              className={`${WE.input} ${WE.formElement}`}
              placeholder="Reason for leaving"
              onChange={(e) => setReasonLeave(e.target.value)}
              value={ReasonLeave}
              type="text"
            ></input>
          </Container>
          <Container className={WE.rowBtn2}>
            <div>
              <Button
                variant="primary"
                size="lg"
                className="btn-primary"
                onClick={()=>setRoutingBack(true)}
              >
                Back
              </Button>
              <Button
                variant="primary"
                size="lg"
                type="submit"
                className="btn-primary"
              >
                Next
              </Button>
            </div>
          </Container>
        </form>
      </Container>
    </>
  );
};

export default WorkExp;
