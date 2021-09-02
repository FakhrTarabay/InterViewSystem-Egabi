import React from "react";
import css from "./MainPage.module.css";
import Container from "../UI/Container";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
const PersonalInfo = () => {
  return (
    <>
      <Container className={css.row2}>
        <PersonIcon className={css.icon} />
        Personal Information
      </Container>
      <Divider />
      <Container className={css.row}>
        <Container className={css.col20}>
          <AssignmentIndIcon className={css.iconBig}></AssignmentIndIcon>
        </Container>
        <Container className={css.col40}>
          <form className={css.form}>
            <label className={css.formElement}>Applicant Name</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Applicant name"
              type="text"
            ></input>
            <label className={css.formElement}>Address</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="address"
              type="text"
            ></input>
            <label className={css.formElement}>Applicant Name</label>
            <select className={`${css.input} ${css.formElement}`}>
              <option value="">Select position</option>
              <option>sfdffd</option>
            </select>
            <label className={css.formElement}>Email</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Email"
              type="text"
            ></input>
            <label className={css.formElement}>Marital Status</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Martial status"
              type="text"
            ></input>
            <label className={css.formElement}>Military status</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Military status"
              type="text"
            ></input>
          </form>
        </Container>
        <Container className={css.col40}>
          <form className={css.form}>
            <label className={css.formElement}>Date</label>
            <input
              className={`${css.input} ${css.formElement}`}
              type="date"
            ></input>
            <label className={css.formElement}>City</label>
            <select className={`${css.input} ${css.formElement}`}>
              <option value="">Select city</option>
              <option>sfdffd</option>
            </select>
            <label className={css.formElement}>Technology</label>
            <select className={`${css.input} ${css.formElement}`}>
              <option value="">Select technology</option>
              <option>sfdffd</option>
            </select>
            <label className={css.formElement}>Mobile</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Mobile"
              type="text"
            ></input>
            <label className={css.formElement}>Number of dependents</label>
            <select className={`${css.input} ${css.formElement}`}>
              <option value="">Select number</option>
              <option>sfdffd</option>
            </select>
            <label className={css.formElement}>If postponed until when</label>
            <input
              className={`${css.input} ${css.formElement}`}
              type="date"
            ></input>
          </form>
        </Container>
      </Container>
    </>
  );
};

export default PersonalInfo;
