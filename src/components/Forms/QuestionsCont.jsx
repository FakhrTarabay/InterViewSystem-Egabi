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

const QuestionsCont = () => {
  const [routingBack, setRoutingBack] = useState(false);
  const [routingFront, setRoutingFront] = useState(false);
  const [index1, setIndex1] = useState(1);
  const [index2, setIndex2] = useState(1);
  const [info, setInfo] = useState([
    { name: "", title: "", mobile: "", auth: "", doRel: "", index: index1 - 1 },
  ]);
  const [info2, setInfo2] = useState([
    {
      nameOpt: "",
      titleOpt: "",
      mobileOpt: "",
      employer: "",
      index: index2 - 1,
    },
  ]);

  const [doRel, setDoRel] = useState("");
  const [auth, setAuth] = useState(false);

  if (routingBack) {
    return <Redirect push to="/Q" />;
  }
  if (routingFront) {
    return <Redirect push to="/Exp" />;
  }

  function HandleAdd() {
    setIndex1((prevState) => prevState + 1);
    setInfo((prevInfo) => [
      ...prevInfo,
      { name: "", title: "", mobile: "", auth: "", doRel: "", index: index1 },
    ]);
  }
  function HandleAdd2() {
    setIndex2((prevState) => prevState + 1);
    setInfo2((prevInfo) => [
      ...prevInfo,
      {
        nameOpt: "",
        titleOpt: "",
        mobileOpt: "",
        employer: "",
        index: index2,
      },
    ]);
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
    <>
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
            setRoutingFront(true);
            console.log("hereQC");
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
              {info.map((element) => (
                <React.Fragment key={element.index}>
                  <div className={`${QuC.formElement} ${QuC.rowInput}`}>
                    <div className={QuC.colInput}>
                      <label className={QuC.formElement}>Name</label>
                      <input
                        required
                        pattern="[a-zA-Z]{1,}"
                        className={`${QuC.input} ${QuC.formElement}`}
                        placeholder="Name"
                        name="name"
                        onChange={(e) =>
                          HandleChange(e, info.indexOf(element), true)
                        }
                        value={info[info.indexOf(element)].name}
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
                        name="title"
                        onChange={(e) =>
                          HandleChange(e, info.indexOf(element), true)
                        }
                        value={info[info.indexOf(element)].title}
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
                        name="mobile"
                        onChange={(e) =>
                          HandleChange(e, info.indexOf(element), true)
                        }
                        value={info[info.indexOf(element)].mobile}
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
              {info2.map((element) => (
                <>
                  <div className={`${QuC.formElement} ${QuC.rowS}`}>
                    <div className={QuC.colInput}>
                      <label className={QuC.formElement}>Name</label>
                      <input
                        required
                        pattern="[a-zA-Z]{1,}"
                        className={`${QuC.input} ${QuC.formElement}`}
                        placeholder="Name"
                        name="nameOpt"
                        onChange={(e) =>
                          HandleChange(e, info2.indexOf(element))
                        }
                        value={info2[info2.indexOf(element)].nameOpt}
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
                        name="titleOpt"
                        onChange={(e) =>
                          HandleChange(e, info2.indexOf(element))
                        }
                        value={info2[info2.indexOf(element)].titleOpt}
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
                        name="employer"
                        onChange={(e) =>
                          HandleChange(e, info2.indexOf(element))
                        }
                        value={info2[info2.indexOf(element)].employer}
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
                        name="mobileOpt"
                        onChange={(e) =>
                          HandleChange(e, info2.indexOf(element))
                        }
                        value={info2[info2.indexOf(element)].mobileOpt}
                        type="text"
                      ></input>
                    </div>
                  </div>
                </>
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
    </>
  );
};

export default QuestionsCont;
