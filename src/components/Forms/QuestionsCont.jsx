import React, { useState } from "react";
import css from "./MainPage.module.css";
import Container from "../UI/Container";
import Divider from "@material-ui/core/Divider";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import RadioButtonsGroup from "../UI/RadioGroup";
import CheckboxN from "../UI/CheckBox";
import WE from "./WorkExp.module.css";



const QuestionsCont = () => {
  const [doRel, setDoRel] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [mobile, setMobile] = useState("");
  const [nameOpt, setNameOpt] = useState("");
  const [titleOpt, setTitleOpt] = useState("");
  const [mobileOpt, setMobileOpt] = useState("");
  const [employer, setEmployer] = useState("");
  const [rel, setRel] = useState("");
  const [abroad, setAbroad] = useState("");
  return (
    <>
      <Container className={css.row2}>
        <HelpOutlineRoundedIcon className={css.icon} />
        <h3 style={{ marginLeft: "10px" }}>Questions</h3>
      </Container>
      <Divider />
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
            <div
              className={css.formElement}
              style={{ display: "flex", flexDirection: "row" }}
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
                  onChange={(e) => setName(e.target.value)}
                  value={name}
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
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
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
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                  type="text"
                ></input>
              </div>
            </div>
            <label className={css.formElement}>
              Reference check: (Optional)
            </label>
            <div
              className={css.formElement}
              style={{ display: "flex", flexDirection: "row" }}
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
                  onChange={(e) => setNameOpt(e.target.value)}
                  value={nameOpt}
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
                  onChange={(e) => setTitleOpt(e.target.value)}
                  value={titleOpt}
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
                  onChange={(e) => setEmployer(e.target.value)}
                  value={employer}
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
                  onChange={(e) => setMobileOpt(e.target.value)}
                  value={mobileOpt}
                  type="text"
                ></input>
              </div>
            </div>
            <label className={css.formElement}>
              Authorization and Acknowledgement
            </label>
            <CheckboxN
                className={WE.MuiButtonBaseRoot}
                // setValue={setIsFresh}
                // value={isFresh}
              />
          </div>
        </Container>
      </Container>
      <Container className={css.rowBtn}>
        <button>sdfdsfsdfds</button>
      </Container>
    </>
  );
};

export default QuestionsCont;
