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
import Lottie from "lottie-react";
import questionAnim from "../assets/lottie_app/questions.json";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/user";

const Questions = () => {
  const [routingBack, setRoutingBack] = useState(false);
  const [routingFront, setRoutingFront] = useState(false);
  const [numWeeks, setNumWeeks] = useState("");
  const [whoVac, setWhoVac] = useState("");
  const [salary, setSalary] = useState("");
  const [other, setOther] = useState("");
  const [itSol, setItSol] = useState("");
  const [abroad, setAbroad] = useState("");
  const userID = useSelector((state) => state.user.id);
  const flagQ = useSelector((state) => state.user.flagQ);
  const dispatch = useDispatch();
  async function send() {
    try {
      const res = await axios({
        method: flagQ ? "put" : "post",
        url: `http://10.1.2.24:3200/registration/JobQuestions/${userID}`,
        data: {
          noticePeriod: +numWeeks,
          expectedMonthlySalary: +salary,
          heardAboutUs: whoVac,
          ifOthers: other,
          willingInItBankingSolutions: itSol==='Yes'?true:false,
          willingTravelingAbroad: abroad==='Yes'?true:false,
        },
      });
      console.log(res);
      dispatch(userActions.setFlagQ());
    } catch (error) {
      console.log(error);
    }
  }

  if (routingBack) {
    return <Redirect push to="/Exp" />;
  }
  if (routingFront) {
    return <Redirect push to="/QC" />;
  }

  return (
    <Container className={Qu.col}>
      <Container className={Qu.rowCenter}>
        <HelpOutlineRoundedIcon className={Qu.icon} />
        <h3 className={Qu.h3}>Questions</h3>
      </Container>
      <Divider className={Qu.Divider} />
      <Container className={Qu.row}>
        <Container className={Qu.col23}>
          <Lottie animationData={questionAnim} />
        </Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send()
            setRoutingFront(true);
          }}
          className={Qu.form}
        >
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
              label="IT"
              row={true}
              options={["Yes", "No"]}
            />
            <label className={Qu.formElement}>
              Are you willing to travel abroad for business missions?
            </label>
            <RadioButtonsGroup
              setOption={setAbroad}
              value={abroad}
              label="abroad"
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
                onClick={() => setRoutingBack(true)}
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
    </Container>
  );
};

export default Questions;
