import React, { useState } from "react";
import Container from "../UI/Container";
import Edu from "./Edu.module.css";
import Divider from "@material-ui/core/Divider";
import SchoolIcon from "@material-ui/icons/School";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from "react-router-dom";

const Education = () => {
  const [routingBack, setRoutingBack] = useState(false);
  const [routingFront, setRoutingFront] = useState(false);
  const [index, setIndex] = useState(1);
  const [highName, setHighName] = useState("");
  const [uniName, setUniName] = useState("");
  const [major, setMajor] = useState("");
  const [faculty, setFaculty] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [grade, setGrade] = useState("");
  const [UniGrade, setUniGrade] = useState("");
  const [info, setInfo] = useState([
    { cert: "", prov: "", year: "", index: index - 1 },
  ]);

  if (routingBack) {
    return <Redirect push to="/" />;
  }
  if (routingFront) {
    return <Redirect push to="/Exp" />;
  }
  
  function HandleAdd() {
    setIndex((prevState) => prevState + 1);
    setInfo((prevInfo) => [
      ...prevInfo,
      { cert: "", prov: "", year: "", index: index },
    ]);
  }
  function HandleChange(e, index) {
    const { name, value } = e.target;
    let list = [...info];
    list[index][name] = value;
    setInfo(list);
  }
  return (
    <>
      <Container className={Edu.rowCenter}>
        <SchoolIcon className={Edu.icon} />
        <h3 className={Edu.h3}>Education</h3>
      </Container>
      <Divider />
      <Container className={Edu.row}>
        <Container className={Edu.col23}>
          <SchoolIcon className={Edu.iconBig}></SchoolIcon>
        </Container>
        <form onSubmit={e=>{
          e.preventDefault()
          console.log(info)
          setRoutingFront(true)
        }} className={Edu.form}>
          <Container className={Edu.col50}>
            <label className={Edu.formElement}>High school Name</label>
            <input
              required
              className={`${Edu.input} ${Edu.formElement}`}
              placeholder="High school Name"
              onChange={(e) => setHighName(e.target.value)}
              value={highName}
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
                  type="text"
                ></input>
              </div>
              <div className={Edu.colInput}>
                <label className={Edu.formElement}>Major</label>
                <input
                  required
                  className={`${Edu.input} ${Edu.formElement}`}
                  placeholder="Major"
                  onChange={(e) => setMajor(e.target.value)}
                  value={major}
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
              type="text"
            ></input>
            <em className={Edu.formElement}>
              Post Graduate studies and/or training certificates
            </em>
            <p>
              Please list acquired certificates, beginning with the main ones.
            </p>
            {info.map((element) => (
              <React.Fragment key={element.index}>
                <div className={`${Edu.formElement} ${Edu.rowInput}`}>
                  <div className={Edu.colInput}>
                    <label className={Edu.formElement}>
                      Certificate/Degree
                    </label>
                    <input
                      required
                      className={`${Edu.input} ${Edu.formElement}`}
                      placeholder="Name"
                      name="cert"
                      onChange={(e) =>
                        HandleChange(e, info.indexOf(element), true)
                      }
                      value={info[info.indexOf(element)].cert}
                      type="text"
                    ></input>
                  </div>
                  <div className={Edu.colInput}>
                    <label className={Edu.formElement}>Provider</label>
                    <input
                      required
                      className={`${Edu.input} ${Edu.formElement}`}
                      placeholder="Provider"
                      name="prov"
                      onChange={(e) =>
                        HandleChange(e, info.indexOf(element), true)
                      }
                      value={info[info.indexOf(element)].prov}
                      type="text"
                    ></input>
                  </div>
                  <div className={Edu.colInput}>
                    <label className={Edu.formElement}>Year</label>
                    <input
                      required
                      className={`${Edu.input} ${Edu.formElement}`}
                      placeholder="Year"
                      name="year"
                      onChange={(e) =>
                        HandleChange(e, info.indexOf(element), true)
                      }
                      value={info[info.indexOf(element)].year}
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
              <div className={Edu.colInput}>
                <label className={Edu.formElement}>Graduation Year</label>
                <input
                  required
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
                onClick={()=>setRoutingBack(true)}
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
    </>
  );
};

export default Education;
