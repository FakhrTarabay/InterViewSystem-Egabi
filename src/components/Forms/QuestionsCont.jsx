import React, { useState } from "react";
import QuC from "./QuestionCont.module.css";
import Container from "../UI/Container";
import Divider from "@material-ui/core/Divider";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import RadioButtonsGroup from "../UI/RadioGroup";
import CheckboxN from "../UI/CheckBox";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./general.css";
import { Redirect } from "react-router-dom";
import Lottie from "lottie-react";
import questionAnim from "../assets/lottie_app/questions.json";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/user";

const QuestionsCont = () => {
  const [routingBack, setRoutingBack] = useState(false);
  const [routingFront, setRoutingFront] = useState(false);
  const [info, setInfo] = useState([["","",""]]);
  const [info2, setInfo2] = useState([["","","",""]]);
  const [doRel, setDoRel] = useState("");
  const [auth, setAuth] = useState(false)
  const userID = useSelector((state) => state.user.id);
  const flagQC = useSelector((state) => state.user.flagQC);
  const dispatch = useDispatch();

  async function send() {
    try {
      const res = await axios({
        method: flagQC ? "put" : "post",
        url: `http://10.1.2.10:3200/registration/ExtraQuestions/${userID}`,
        data: {
          hasRelatives: doRel==='Yes'?true:false,
          recommendation: info,
          referenceCheck: info2,
        },
      });
      console.log(res);
      dispatch(userActions.setFlagQC());
    } catch (error) {
      console.log(error);
    }
  }

  if (routingBack) {
    return <Redirect push to="/Q" />;
  }
  if (routingFront) {
    return <Redirect push to="/Exam" />;
  }

  function HandleAdd() {
    setInfo((prevInfo) => [...prevInfo, ["","",""]]);
  }
  function HandleAdd2() {
    setInfo2((prevInfo) => [...prevInfo,["","","",""]])
  }
  function HandleChange(e, index, which) {
    const { name, value } = e.target;
    if (which) {
      let list = [...info];
      list[index][name] = value;
      setInfo(list);
    } else {
      let list = [...info2];
      list[index][name] = value;
      setInfo2(list);
    }
  }
  return (
    <Container className={QuC.col}>
      <Container className={QuC.rowCenter}>
        <HelpOutlineRoundedIcon className={QuC.icon} />
        <h3 className={QuC.h3}>Questions</h3>
      </Container>
      <Divider className={QuC.Divider} />
      <Container className={QuC.row}>
        <Container className={QuC.col23}>
          <Lottie animationData={questionAnim} />
        </Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
            setRoutingFront(true);
          }}
          className={QuC.form}
        >
          <Container className={QuC.col80}>
            <div className={QuC.form}>
              <label className={QuC.formElement}>
                Do you have any relatives currently working at Egabi Group?
              </label>
              <RadioButtonsGroup
                setOption={setDoRel}
                value={doRel}
                label="Do you have any relatives currently working at Egabi Group?"
                row={true}
                options={["Yes", "No"]}
              />
              <label className={QuC.formElement}>
                Please mention any recommendation to work at egabiFSI.
              </label>
              {info.map((element, index) => (
                <React.Fragment key={index}>
                  <div className={`${QuC.formElement} ${QuC.rowInput}`}>
                    <div className={QuC.colInput}>
                      <label className={QuC.formElement}>Name</label>
                      <input
                        required
                        pattern="[a-zA-Z]{1,}"
                        className={`${QuC.input} ${QuC.formElement}`}
                        placeholder="Name"
                        name={0}
                        onChange={(e) => HandleChange(e, index, true)}
                        value={element[0]}
                        type="text"
                      ></input>
                    </div>
                    <div className={QuC.colInput}>
                      <label className={QuC.formElement}>Title</label>
                      <input
                        required
                        pattern="[a-zA-Z]{1,}"
                        className={`${QuC.input} ${QuC.formElement}`}
                        placeholder="Title"
                        name={1}
                        onChange={(e) => HandleChange(e, index, true)}
                        value={element[1]}
                        type="text"
                      ></input>
                    </div>
                    <div className={QuC.colInput}>
                      <label className={QuC.formElement}>Mobile</label>
                      <input
                        required
                        pattern="^0(10|11|12)[0-9]{8}"
                        className={`${QuC.input} ${QuC.formElement}`}
                        placeholder="Mobile"
                        name={2}
                        onChange={(e) => HandleChange(e, index, true)}
                        value={element[2]}
                        type="text"
                      ></input>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              <div className={`${QuC.formElement} ${QuC.rowWithWrap}`}>
                <Button
                  variant="primary"
                  size="lg"
                  className="btn-primary"
                  onClick={HandleAdd}
                  style={{ marginLeft: "0px", marginTop: "5px" }}
                >
                  Add more
                </Button>
              </div>
              <label className={QuC.formElement}>
                Reference check: (Optional)
              </label>
              {info2.map((element, index) => (
                <React.Fragment key={index}>
                  <div className={`${QuC.formElement} ${QuC.rowS}`}>
                    <div className={QuC.colInput}>
                      <label className={QuC.formElement}>Name</label>
                      <input
                        required
                        pattern="[a-zA-Z]{1,}"
                        className={`${QuC.input} ${QuC.formElement}`}
                        placeholder="Name"
                        name={0}
                        onChange={(e) => HandleChange(e, index)}
                        value={element[0]}
                        type="text"
                      ></input>
                    </div>
                    <div className={QuC.colInput}>
                      <label className={QuC.formElement}>Title</label>
                      <input
                        required
                        pattern="[a-zA-Z]{1,}"
                        className={`${QuC.input} ${QuC.formElement}`}
                        placeholder="Title"
                        name={1}
                        onChange={(e) => HandleChange(e, index)}
                        value={element[1]}
                        type="text"
                      ></input>
                    </div>
                    <div className={QuC.colInput}>
                      <label className={QuC.formElement}>Employer</label>
                      <input
                        required
                        pattern="[a-zA-Z]{1,}"
                        className={`${QuC.input} ${QuC.formElement}`}
                        placeholder="Employer"
                        name={2}
                        onChange={(e) => HandleChange(e, index)}
                        value={element[2]}
                        type="text"
                      ></input>
                    </div>
                    <div className={QuC.colInput}>
                      <label className={QuC.formElement}>Mobile</label>
                      <input
                        required
                        pattern="^0(10|11|12)[0-9]{8}"
                        className={`${QuC.input} ${QuC.formElement}`}
                        placeholder="Mobile"
                        name={3}
                        onChange={(e) => HandleChange(e, index)}
                        value={element[3]}
                        type="text"
                      ></input>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              <div className={`${QuC.formElement} ${QuC.inputWithWrap}`}>
                <Button
                  variant="primary"
                  size="lg"
                  className="btn-primary"
                  onClick={HandleAdd2}
                  style={{ marginLeft: "0px", marginTop: "5px" }}
                >
                  Add more
                </Button>
              </div>
            </div>
          </Container>
          <Container className={QuC.rowBtn}>
            <div>
              <em className={QuC.formElement} style={{ marginLeft: "4px" }}>
                Authorization and Acknowledgement
              </em>
              <p style={{ margin: "0px", marginLeft: "3px" }}>
                I certify that the facts contained in this application are true
                and complete.
              </p>
              <CheckboxN
                className={QuC.MuiButtonBaseRoot}
                setValue={setAuth}
                value={auth}
              />
            </div>
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
                type="submit"
                variant="primary"
                size="lg"
                className="btn-primary"
              >
                Submit
              </Button>
            </div>
          </Container>
        </form>
      </Container>
    </Container>
  );
};

export default QuestionsCont;
