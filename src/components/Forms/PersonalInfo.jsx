import React, { useState } from "react";
import css from "./MainPage.module.css";
import Container from "../UI/Container";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Selector from "../UI/Selector";
import RadioButtonsGroup from "../UI/RadioGroup";
import DatePicker from "../UI/DatePicker";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
const PersonalInfo = () => {
  const [applicantName, setApplicantName] = useState("");
  const [Address, setAddress] = useState("");
  const [AppliedFor, setAppliedFor] = useState("");
  const [email, setEmail] = useState("");
  const [maritalStatus, setMaritStatus] = useState("");
  const [militaryStatus, setMilitStatus] = useState("");
  const [date, setDate] = useState(new Date());
  const [City, setCity] = useState("");
  const [Techno, setTechno] = useState("");
  const [Mobile, setMobile] = useState("");
  const [NofDep, setNofDep] = useState("");
  const [PostTill, setPostTill] = useState(new Date());
  const [Info,setInfo] = useState([])

  function HandleReset(){
    setApplicantName("");
    setAppliedFor("");
    setAddress("");
    setEmail("");
    setMaritStatus("");
    setMilitStatus("");
    setDate(new Date());
    setCity("");
    setTechno("");
    setMobile("");
    setNofDep("");
    setPostTill(new Date());
  }
  function HandleAddMore(){
    const info = {applicantName:applicantName,Address:Address,AppliedFor:AppliedFor,email:email,maritalStatus:maritalStatus,militaryStatus:militaryStatus,
    date:date,City:City,Techno:Techno,Mobile:Mobile,NofDep:NofDep,PostTill:PostTill}
    setInfo(prevInfo=>[...prevInfo,info])
    HandleReset();
    console.log(Info)
  }
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
          <div className={css.form}>
            <label className={css.formElement}>Applicant Name</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Applicant name"
              onChange={(e) => setApplicantName(e.target.value)}
              value={applicantName}
              type="text"
            ></input>
            <label className={css.formElement}>Address</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={Address}
              type="text"
            ></input>
            <Selector
              className={`${css.input} ${css.formElement}`}
              items={[1, 2, 3]}
              setValue={setAppliedFor}
              value={AppliedFor}
              label="Applying for:"
              help="Pick position"
            />
            <label className={css.formElement}>Email</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
            ></input>
            <label className={css.formElement}>Marital Status</label>
            <RadioButtonsGroup
              setOption={setMaritStatus}
              value={maritalStatus}
              label="Marital Status"
              row={true}
              options={["Single", "Married"]}
            />
            <label className={css.formElement}>Military status</label>
            <RadioButtonsGroup
              setOption={setMilitStatus}
              value={militaryStatus}
              label="Marital Status"
              row={true}
              options={["Complete", "Exempted", "Postponed", "N/A"]}
            />
          </div>
        </Container>
        <Container className={css.col40}>
          <div className={css.form}>
            <DatePicker setValue={setDate} value={date} label="Date" />
            <Selector
              className={`${css.input} ${css.formElement}`}
              items={[1, 2, 3]}
              setValue={setCity}
              value={City}
              label="City"
              help="Pick the city in which you live"
            />
            <Selector
              className={`${css.input} ${css.formElement}`}
              items={[1, 2, 3]}
              setValue={setTechno}
              value={Techno}
              label="Technology"
              help="Pick technology in which you are confident"
            />
            <label className={css.formElement}>Mobile</label>
            <input
              className={`${css.input} ${css.formElement}`}
              onChange={(e) => setMobile(e.target.value)}
              value={Mobile}
              placeholder="Mobile"
              type="text"
            ></input>
            <Selector
              className={`${css.input} ${css.formElement}`}
              items={[1, 2, 3]}
              setValue={setNofDep}
              value={NofDep}
              label="Number of dependents"
              help="Pick the number of family members"
            />
            <DatePicker
              setValue={setPostTill}
              value={PostTill}
              label="If postponed until when"
            />
          </div>
        </Container>
      </Container>
      <Container className={css.rowBtn}>
        <Button
          variant="primary"
          size="lg"
          className="btn-primary"
          onClick={HandleAddMore}
        >
          Add more
        </Button>
        <Button
          variant="primary"
          size="lg"
          className="btn-primary"
          // onClick={HandleClick}
        >
          Submit
        </Button>
      </Container>
    </>
  );
};

export default PersonalInfo;
