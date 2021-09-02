import React from "react";
import css from "./MainPage.module.css";
import Container from "../UI/Container";
import Divider from "@material-ui/core/Divider";
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
const Questions = () => {
  return (
    <>
      <Container className={css.row2}>
        <HelpOutlineRoundedIcon  className={css.icon} />
        <h3 style={{marginLeft:'10px'}}>Questions</h3>
      </Container>
      <Divider />
      <Container className={css.row}>
        <Container className={css.col20}>
          <HelpOutlineRoundedIcon className={css.iconBig}/>
        </Container>
        <Container className={css.col40}>
          <form className={css.form}>
            <label className={css.formElement}>Notice period</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Enter number of weeks"
              type="text"
            ></input>
            <label className={css.formElement}>How did you know about this vacancy?</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="How?"
              type="text"
            ></input>
            <label className={css.formElement}>Are you willing to work in banking IT solutions?</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Yes or No?"
              type="text"
            ></input>
          </form>
        </Container>
        <Container className={css.col40}>
          <form className={css.form}>
            <label className={css.formElement}>Expected monthly salary in EGP</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Expected salary"
              type="text"
            ></input>
            <label className={css.formElement}>Please specify the channel</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Others"
              disabled
              type="text"
            ></input>
            <label className={css.formElement}>Are you willing to travel abroad for business missions</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Yes or no?"
              disabled
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

export default Questions;
