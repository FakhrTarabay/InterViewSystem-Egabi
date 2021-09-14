import React, { useState } from "react";
import Per from "./Per.module.css";
import Container from "../UI/Container";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/Person";
import Selector from "../UI/Selector";
import RadioButtonsGroup from "../UI/RadioGroup";
import DatePicker from "../UI/DatePicker";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from "react-router-dom";
import Lottie from "lottie-react";
import personal from "../assets/lottie_app/personalinfo.json";

const PersonalInfo = () => {
  // const info = {
  //   applicantName: applicantName,
  //   Address: Address,
  //   AppliedFor: AppliedFor,
  //   email: email,
  //   maritalStatus: maritalStatus,
  //   militaryStatus: militaryStatus,
  //   date: date,
  //   City: City,
  //   Techno: Techno,
  //   Mobile: Mobile,
  //   NofDep: NofDep,
  //   PostTill: PostTill,
  // };
  const [routing, setRouting] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [Address, setAddress] = useState("");
  const [AppliedFor, setAppliedFor] = useState("");
  const [email, setEmail] = useState("");
  const [maritalStatus, setMaritStatus] = useState("");
  const [militaryStatus, setMilitStatus] = useState("");
  const [date, setDate] = useState(null);
  const [City, setCity] = useState("");
  const [Techno, setTechno] = useState("");
  const [Mobile, setMobile] = useState("");
  const [NofDep, setNofDep] = useState("");
  const [PostTill, setPostTill] = useState(null);

  if (routing) {
    return <Redirect push to="/Edu/" />;
  }

  return (
    <>
      <Container className={Per.rowCenter}>
        <PersonIcon className={Per.icon} />
        <h3 className={Per.h3}>Personal information</h3>
      </Container>
      <Divider />
      <Container className={Per.row}>
        <Container className={Per.col23}>
          <Lottie animationData={personal} />
        </Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("herePerson");
            setRouting(true);
          }}
          className={Per.form}
        >
          <Container className={Per.col50}>
            <label className={Per.formElement}>Applicant Name</label>
            <input
              required
              className={`${Per.input} ${Per.formElement}`}
              placeholder="Applicant name"
              onChange={(e) => setApplicantName(e.target.value)}
              value={applicantName}
              pattern="[a-zA-Z]{1,}"
              type="text"
            ></input>
            <label className={Per.formElement}>Address</label>
            <input
              required
              className={`${Per.input} ${Per.formElement}`}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={Address}
              type="text"
            ></input>
            <Selector
              className={`${Per.input} ${Per.formElement}`}
              items={[1, 2, 3]}
              setValue={setAppliedFor}
              value={AppliedFor}
              label="Applying for:"
              help="Pick position"
            />
            <label className={Per.formElement}>Email</label>
            <input
              required
              className={`${Per.input} ${Per.formElement}`}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
              type="text"
            ></input>
            <label className={Per.formElement}>Marital Status</label>
            <RadioButtonsGroup
              required
              setOption={setMaritStatus}
              value={maritalStatus}
              label="Marital Status"
              row={true}
              options={["Single", "Married"]}
            />
            <label className={Per.formElement}>Military status</label>
            <RadioButtonsGroup
              required
              setOption={setMilitStatus}
              value={militaryStatus}
              label="Military Status"
              row={true}
              options={["Complete", "Exempted", "Postponed", "N/A"]}
            />
          </Container>
          <Container className={Per.col50}>
            <DatePicker setValue={setDate} value={date} label="Date" />
            <Selector
              className={`${Per.input} ${Per.formElement}`}
              items={[1, 2, 3]}
              setValue={setCity}
              value={City}
              label="City"
              help="Pick the city in which you live"
            />
            <Selector
              className={`${Per.input} ${Per.formElement}`}
              items={[1, 2, 3]}
              setValue={setTechno}
              value={Techno}
              label="Technology"
              help="Pick technology in which you are confident"
            />
            <label className={Per.formElement}>Mobile</label>
            <input
              required
              className={`${Per.input} ${Per.formElement}`}
              onChange={(e) => setMobile(e.target.value)}
              value={Mobile}
              placeholder="Mobile i.e."
              pattern="^0(10|11|12)[0-9]{8}"
              type="text"
            ></input>
            <Selector
              className={`${Per.input} ${Per.formElement}`}
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
          </Container>
          <Container className={Per.rowBtn}>
            <div>
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

export default PersonalInfo;
