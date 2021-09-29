import React, { useState } from "react";
import Container from "../UI/Container";
import Edu from "./Edu.module.css";
import Divider from "@material-ui/core/Divider";
import SchoolIcon from "@material-ui/icons/School";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from "react-router-dom";
import Lottie from "lottie-react";
import edu from "../assets/lottie_app/education.json";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/user";

const Education = () => {
  const [routingBack, setRoutingBack] = useState(false);
  const [routingFront, setRoutingFront] = useState(false);
  // const [index, setIndex] = useState(1);
  const [highName, setHighName] = useState("");
  const [uniName, setUniName] = useState("");
  const [major, setMajor] = useState("");
  const [faculty, setFaculty] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [grade, setGrade] = useState("");
  const [UniGrade, setUniGrade] = useState("");
  const [info, setInfo] = useState([
    ["","",""],
  ]);
  const userID = useSelector((state) => state.user.id);
  const flagEdu = useSelector((state) => state.user.flagEdu);
  const dispatch = useDispatch();
  if (routingBack) {
    return <Redirect push to="/" />;
  }
  if (routingFront) {
    return <Redirect push to="/Exp" />;
  }

  function HandleAdd() {
    setInfo((prevInfo) => [
      ...prevInfo,
      ["","",""],
    ]);
  }
  function HandleChange(e, index) {
    const { name, value } = e.target;
    let list = [...info];
    list[index][name] = value;
    setInfo(list);
  }

  async function send() {
    try {
      const res = await axios({
        method: flagEdu ? "put" : "post",
        url: `http://10.1.2.24:3200/registration/EducationalInfo/${userID}`,
        data: {
          high_school_name: highName,
          university_name: uniName,
          major: major,
          faculty: faculty,
          high_school_graduation_year: gradYear,
          grade: grade,
          University_graduation_year: UniGrade,
          addMoreItems: info,
        },
      });
      console.log(res);
      dispatch(userActions.setFlagEdu())
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container className={Edu.col}>
      <Container className={Edu.rowCenter}>
        <SchoolIcon className={Edu.icon} />
        <h3 className={Edu.h3}>Education</h3>
      </Container>
      <Divider />
      <Container className={Edu.row}>
        <Container className={Edu.col23}>
          <Lottie animationData={edu} />
        </Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
            setRoutingFront(true);
          }}
          className={Edu.form}
        >
          <Container className={Edu.col50}>
            <label className={Edu.formElement}>High school Name</label>
            <input
              required
              className={`${Edu.input} ${Edu.formElement}`}
              placeholder="High school Name"
              onChange={(e) => setHighName(e.target.value)}
              value={highName}
              pattern="[a-zA-Z]{1,}"
              type="text"
            ></input>
            <div className={`${Edu.formElement} ${Edu.rowInput}`}>
              <div className={Edu.colInput}>
                <label className={Edu.formElement}>University Name</label>
                <input
                  required
                  className={`${Edu.input} ${Edu.formElement}`}
                  placeholder="University Name"
                  onChange={(e) => setUniName(e.target.value)}
                  value={uniName}
                  pattern="[a-zA-Z]{1,}"
                  type="text"
                ></input>
              </div>
              <div className={Edu.colInput} style={{ marginRight: "0px" }}>
                <label className={Edu.formElement}>Major</label>
                <input
                  required
                  className={`${Edu.input} ${Edu.formElement}`}
                  placeholder="Major"
                  onChange={(e) => setMajor(e.target.value)}
                  value={major}
                  pattern="[a-zA-Z]{1,}"
                  type="text"
                ></input>
              </div>
            </div>
            <label className={Edu.formElement}>Faculty</label>
            <input
              required
              className={`${Edu.input} ${Edu.formElement}`}
              placeholder="Faculty"
              onChange={(e) => setFaculty(e.target.value)}
              value={faculty}
              pattern="[a-zA-Z]{1,}"
              type="text"
            ></input>
            <em className={Edu.formElement}>
              Post Graduate studies and/or training certificates
            </em>
            <p>
              Please list acquired certificates, beginning with the main ones.
            </p>
            {info.map((element) => (
              <React.Fragment key={info.indexOf(element)}>
                <div className={`${Edu.formElement} ${Edu.rowInput}`}>
                  <div className={Edu.colInput}>
                    <label className={Edu.formElement}>
                      Certificate/Degree
                    </label>
                    <input
                      required
                      pattern="[a-zA-Z]{1,}"
                      className={`${Edu.input} ${Edu.formElement}`}
                      placeholder="Name"
                      name={0}
                      onChange={(e) => HandleChange(e, info.indexOf(element))}
                      value={info[info.indexOf(element)][0]}
                      type="text"
                    ></input>
                  </div>
                  <div className={Edu.colInput}>
                    <label className={Edu.formElement}>Provider</label>
                    <input
                      required
                      pattern="[a-zA-Z]{1,}"
                      className={`${Edu.input} ${Edu.formElement}`}
                      placeholder="Provider"
                      name={1}
                      onChange={(e) => HandleChange(e, info.indexOf(element))}
                      value={info[info.indexOf(element)][1]}
                      type="text"
                    ></input>
                  </div>
                  <div className={Edu.colInput}>
                    <label className={Edu.formElement}>Year</label>
                    <input
                      required
                      pattern="^2[0-1]{1}[0-9]{2}"
                      className={`${Edu.input} ${Edu.formElement}`}
                      placeholder="Year"
                      name={2}
                      onChange={(e) => HandleChange(e, info.indexOf(element))}
                      value={info[info.indexOf(element)][2]}
                      type="text"
                    ></input>
                  </div>
                </div>
              </React.Fragment>
            ))}
            <div className={`${Edu.formElement} ${Edu.inputWithWrap}`}>
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
          </Container>
          <Container className={Edu.col50}>
            <label className={Edu.formElement}>Graduation Year</label>
            <input
              required
              pattern="(19|20){1}[0-9]{2}"
              className={`${Edu.input} ${Edu.formElement}`}
              placeholder="Graduation Year"
              onChange={(e) => setGradYear(e.target.value)}
              value={gradYear}
              type="text"
            ></input>
            <div className={`${Edu.formElement} ${Edu.rowInput}`}>
              <div className={Edu.colInput}>
                <label className={Edu.formElement}>Grade</label>
                <input
                  required
                  className={`${Edu.input} ${Edu.formElement}`}
                  placeholder="Grade"
                  onChange={(e) => setGrade(e.target.value)}
                  value={grade}
                  type="text"
                ></input>
              </div>
              <div className={Edu.colInput} style={{ marginRight: "0px" }}>
                <label className={Edu.formElement}>Graduation Year</label>
                <input
                  required
                  pattern="(19|20){1}[0-9]{2}"
                  className={`${Edu.input} ${Edu.formElement}`}
                  placeholder="Graduation Year"
                  onChange={(e) => setUniGrade(e.target.value)}
                  value={UniGrade}
                  type="text"
                ></input>
              </div>
            </div>
          </Container>
          <Container className={Edu.rowBtn}>
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

export default Education;
