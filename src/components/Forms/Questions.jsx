import React, { useState } from "react";
import Qu from "./Question.module.css";
import Container from "../UI/Container";
import Divider from "@material-ui/core/Divider";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import RadioButtonsGroup from "../UI/RadioGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import { Redirect } from "react-router-dom";

const Questions = () => {
  const [routingBack, setRoutingBack] = useState(false);
  const [routingFront, setRoutingFront] = useState(false);
  const [numWeeks, setNumWeeks] = useState("");
  const [whoVac, setWhoVac] = useState("");
  const [salary, setSalary] = useState("");
  const [other, setOther] = useState("");
  const [itSol, setItSol] = useState("");
  const [abroad, setAbroad] = useState("");

  if (routingBack) {
    return <Redirect push to="/Exp" />;
  }
  if (routingFront) {
    return <Redirect push to="/QC" />;
  }

  return (
    <>
      <Container className={Qu.rowCenter}>
        <HelpOutlineRoundedIcon className={Qu.icon} />
        <h3 className={Qu.h3}>Questions</h3>
      </Container>
      <Divider className={Qu.Divider} />
      <Container className={Qu.row}>
        <Container className={Qu.col23}>
          <HelpOutlineRoundedIcon className={Qu.iconBig} />
        </Container>
        <form onSubmit={e=>{
          e.preventDefault();
          setRoutingFront(true)
          console.log('hereQ')
        }} className={Qu.form}>
          <Container className={Qu.col50}>
            <label className={Qu.formElement}>Notice period</label>
            <input
              required
              pattern="[0-9]{1,}"
              className={`${Qu.input} ${Qu.formElement}`}
              onChange={(e) => setNumWeeks(e.target.value)}
              value={numWeeks}
              placeholder="Enter number of weeks"
              type="text"
            ></input>
            <label className={Qu.formElement}>
              How did you know about this vacancy?
            </label>
            <RadioButtonsGroup
              setOption={setWhoVac}
              value={whoVac}
              label="Marital Status"
              row={true}
              options={[
                "Social Media",
                "egabiFSI Employee",
                "recruitme website",
                "Others",
              ]}
            />
            <label className={Qu.formElement}>Please specify the channel</label>
            <input
              required
              pattern="[a-zA-Z]{1,}"
              className={`${Qu.input} ${Qu.formElement}`}
              placeholder="Others"
              onChange={(e) => setOther(e.target.value)}
              value={other}
              disabled={whoVac === "Others" ? false : true}
              type="text"
            ></input>
          </Container>
          <Container className={Qu.col50}>
            <label className={Qu.formElement}>
              Expected monthly salary in EGP
            </label>
            <input
              required
              pattern="[0-9]{1,}"
              className={`${Qu.input} ${Qu.formElement}`}
              placeholder="Expected salary"
              onChange={(e) => setSalary(e.target.value)}
              value={salary}
              type="text"
            ></input>
            <label className={Qu.formElement}>
              Are you willing to work in banking IT solutions?
            </label>
            <RadioButtonsGroup
              setOption={setItSol}
              value={itSol}
              label="Marital Status"
              row={true}
              options={["Yes", "No"]}
            />
            <label className={Qu.formElement}>
              Are you willing to travel abroad for business missions?
            </label>
            <RadioButtonsGroup
              setOption={setAbroad}
              value={abroad}
              label="Marital Status"
              row={true}
              options={["Yes", "No"]}
            />
          </Container>
          <Container className={Qu.rowBtn}>
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

export default Questions;
