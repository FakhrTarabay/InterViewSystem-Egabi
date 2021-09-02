import React from "react";
import css from "./MainPage.module.css";
import Container from "../UI/Container";
import Divider from "@material-ui/core/Divider";
import WorkOutlineRoundedIcon from '@material-ui/icons/WorkOutlineRounded';
const WorkExp = () => {
  return (
    <>
      <Container className={css.row2}>
        <WorkOutlineRoundedIcon className={css.icon} />
        <h3 style={{ marginLeft: "10px" }}>Work Experience</h3>
      </Container>
      <Divider />
      <Container className={css.row}>
        <Container className={css.col20}>
          <WorkOutlineRoundedIcon className={css.iconBig}/>
        </Container>
        <Container className={css.col40}>
          <form className={css.form}>
            <label className={css.formElement}>Fresh Graduate</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="yes no"
              type="text"
            ></input>
            <label className={css.formElement}>Company name</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Company name"
              type="text"
            ></input>
            <label className={css.formElement}>Duration from</label>
            <input
              className={`${css.input} ${css.formElement}`}
              type="date"
            ></input>
            <label className={css.formElement}>Entry position</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="entry position"
              type="text"
            ></input>
            <label className={css.formElement}>Last monthly salary in EGP</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Last monthly salary"
              type="text"
            ></input>
          </form>
        </Container>
        <Container className={css.col40}>
          <form className={css.form}>
            <label className={css.formElement}>Total years of experience</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Select number of years"
              type="text"
            ></input>
            <label className={css.formElement}>current employer</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="current employer"
              type="text"
            ></input>
            <label className={css.formElement}>Duration to</label>
            <input
              className={`${css.input} ${css.formElement}`}
              type="date"
            ></input>
            <label className={css.formElement}>Last position held</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Last position held"
              type="text"
            ></input>
            <label className={css.formElement}>Reason for leaving</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Reason for leaving"
              type="text"
            ></input>
          </form>
        </Container>
      </Container>
      <Container className={css.rowBtn}>
        <button>sdfdsfsdfds</button>
      </Container>
    </>
  );
};

export default WorkExp;
