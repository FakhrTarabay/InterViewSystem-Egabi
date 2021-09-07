import React from "react";
import css from "./MainPage.module.css";
import Container from "../UI/Container";
import Divider from "@material-ui/core/Divider";
import SchoolIcon from "@material-ui/icons/School";
import Button from "react-bootstrap/Button";

const Education = () => {

  function HandleClick() {
    console.log("asdasd");
  }
  return (
    <>
      <Container className={css.row2}>
        <SchoolIcon className={css.icon} />
        <h3 style={{ marginLeft: "10px" }}>Education</h3>
      </Container>
      <Divider />
      <Container className={css.row}>
        <Container className={css.col20}>
          <SchoolIcon className={css.iconBig}></SchoolIcon>
        </Container>
        <Container className={css.col600}>
          <Container className={css.row40}>
            <form className={css.form}>
              <label className={css.formElement}>High school Name</label>
              <input
                className={`${css.input40} ${css.formElement}`}
                placeholder="High school Name"
                type="text"
              ></input>
              <label className={css.formElement}>University name</label>
              <input
                className={`${css.input40} ${css.formElement}`}
                placeholder="University name"
                type="text"
              ></input>
              <label className={css.formElement}>Major</label>
              <input
                className={`${css.input40} ${css.formElement}`}
                placeholder="Major"
                type="text"
              ></input>
              <label className={css.formElement}>Faculty</label>
              <input
                className={`${css.input40} ${css.formElement}`}
                placeholder="Faculty"
                type="text"
              ></input>
              <label className={css.formElement}>Date</label>
              <input
                className={`${css.input40} ${css.formElement}`}
                type="date"
              ></input>
              <label className={css.formElement}>City</label>
              <select className={`${css.input40} ${css.formElement}`}>
                <option value="">Select city</option>
                <option>sfdffd</option>
              </select>
              <label className={css.formElement}>Technology</label>
              <select className={`${css.input40} ${css.formElement}`}>
                <option value="">Select technology</option>
                <option>sfdffd</option>
              </select>
            </form>
          </Container>
          <Container>
            <h4 style={{ margin: "0px", padding: "0px " }}>
              Post graduate studies and/or training certificates
            </h4>
            <p>
              Please list acquired certificates, beginning with the main ones
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "7px",
                }}
              >
                <label className={css.formElement}>Certificate/Degree</label>
                <input
                  className={`${css.input} ${css.formElement}`}
                  placeholder="Certificate/Degree"
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
                <label className={css.formElement}>Provider</label>
                <input
                  className={`${css.input} ${css.formElement}`}
                  placeholder="Provider"
                  type="text"
                ></input>
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </Container>
        </Container>
      </Container>
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
    </>
  );
};

export default Education;
