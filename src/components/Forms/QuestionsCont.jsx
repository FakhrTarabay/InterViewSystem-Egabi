import React, { useState } from "react";
import css from "./MainPage.module.css";
import Container from "../UI/Container";
import Divider from "@material-ui/core/Divider";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import RadioButtonsGroup from "../UI/RadioGroup";
import CheckboxN from "../UI/CheckBox";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./WorkExp.css";
import WE from "./WorkExp.module.css";
import "./Question.css";

const QuestionsCont = () => {
  const tmp = {
    name: "",
    title: "",
    mobile: "",
    auth: "",
    doRel: "",
  };
  const tmp2 = {
    nameOpt: "",
    titleOpt: "",
    mobileOpt: "",
    employer: "",
  };
  const [info, setInfo] = useState([tmp]);
  const [info2, setInfo2] = useState([tmp2]);

  const [doRel, setDoRel] = useState("");
  const [auth, setAuth] = useState(false);

  function HandleAdd() {
    setInfo((prevInfo) => [...prevInfo, tmp]);
  }
  function HandleAdd2() {
    setInfo2((prevInfo) => [...prevInfo, tmp2]);
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

  function HandleClick() {
    console.log(info);
  }
  return (
    <>
      <Container className={css.row2}>
        <HelpOutlineRoundedIcon className={css.icon} />
        <h3 style={{ marginLeft: "10px" }}>Questions</h3>
      </Container>
      <Divider className="Divider" />
      <Container className={css.row}>
        <Container className={css.col20}>
          <HelpOutlineRoundedIcon className={css.iconBig} />
        </Container>
        <Container className={css.col75}>
          <div className={css.form}>
            <label className={css.formElement}>
              Do you have any relatives currently working at Egabi Group?
            </label>
            <RadioButtonsGroup
              setOption={setDoRel}
              value={doRel}
              label="Do you have any relatives currently working at Egabi Group?"
              row={true}
              options={["Yes", "No"]}
            />
            <label className={css.formElement}>
              Please mention any recommendation to work at egabiFSI.
            </label>
            {info.map((element) => (
              <>
                <div
                  className={css.formElement}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "end",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "7px",
                    }}
                  >
                    <label className={css.formElement}>Name</label>
                    <input
                      className={`${css.input} ${css.formElement}`}
                      placeholder="Name"
                      name="name"
                      onChange={(e) =>
                        HandleChange(e, info.indexOf(element), true)
                      }
                      value={info[info.indexOf(element)].name}
                      type="text"
                    ></input>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "7px",
                    }}
                  >
                    <label className={css.formElement}>Title</label>
                    <input
                      className={`${css.input} ${css.formElement}`}
                      placeholder="Title"
                      name="title"
                      onChange={(e) =>
                        HandleChange(e, info.indexOf(element), true)
                      }
                      value={info[info.indexOf(element)].title}
                      type="text"
                    ></input>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "7px",
                    }}
                  >
                    <label className={css.formElement}>Mobile</label>
                    <input
                      className={`${css.input} ${css.formElement}`}
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
              </>
            ))}
            <div
              className={css.formElement}
              style={{ display: "flex", flexDirection: "row" }}
            >
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
            <label className={css.formElement}>
              Reference check: (Optional)
            </label>
            {info2.map((element) => (
              <>
                <div
                  className={css.formElement}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "7px",
                    }}
                  >
                    <label className={css.formElement}>Name</label>
                    <input
                      className={`${css.input} ${css.formElement}`}
                      placeholder="Name"
                      name="nameOpt"
                      onChange={(e) => HandleChange(e, info2.indexOf(element))}
                      value={info2[info2.indexOf(element)].nameOpt}
                      type="text"
                    ></input>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "7px",
                    }}
                  >
                    <label className={css.formElement}>Title</label>
                    <input
                      className={`${css.input} ${css.formElement}`}
                      placeholder="Title"
                      name="titleOpt"
                      onChange={(e) => HandleChange(e, info2.indexOf(element))}
                      value={info2[info2.indexOf(element)].titleOpt}
                      type="text"
                    ></input>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "7px",
                    }}
                  >
                    <label className={css.formElement}>Employer</label>
                    <input
                      className={`${css.input} ${css.formElement}`}
                      placeholder="Employer"
                      name="employer"
                      onChange={(e) => HandleChange(e, info2.indexOf(element))}
                      value={info2[info2.indexOf(element)].employer}
                      type="text"
                    ></input>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "7px",
                    }}
                  >
                    <label className={css.formElement}>Mobile</label>
                    <input
                      className={`${css.input} ${css.formElement}`}
                      placeholder="Mobile"
                      name="mobileOpt"
                      onChange={(e) => HandleChange(e, info2.indexOf(element))}
                      value={info2[info2.indexOf(element)].mobileOpt}
                      type="text"
                    ></input>
                  </div>
                </div>
              </>
            ))}
            <div
              className={css.formElement}
              style={{ display: "flex", flexDirection: "row" }}
            >
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
      </Container>
      <Divider />
      <Container className={WE.rowBtn}>
        <div>
          <em className={css.formElement} style={{ marginLeft: "4px" }}>
            Authorization and Acknowledgement
          </em>
          <p style={{ margin: "0px", marginLeft: "3px" }}>
            I certify that the facts contained in this application are true and
            complete.
          </p>

          <CheckboxN
            className={WE.MuiButtonBaseRoot}
            setValue={setAuth}
            value={auth}
          />
        </div>
        <div>
          <Button
            variant="primary"
            size="lg"
            className="btn-primary"
            onClick={HandleClick}
          >
            Back
          </Button>
          <Button
            variant="primary"
            size="lg"
            className="btn-primary"
            onClick={HandleClick}
          >
            Submit
          </Button>
        </div>
      </Container>
    </>
  );
};

export default QuestionsCont;
