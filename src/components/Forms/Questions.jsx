import React,{useState} from "react";
import css from "./MainPage.module.css";
import Container from "../UI/Container";
import Divider from "@material-ui/core/Divider";
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import RadioButtonsGroup from "../UI/RadioGroup";

const Questions = () => {
  const [numWeeks, setNumWeeks] = useState("")
  const [whoVac, setWhoVac] = useState("")
  const [salary, setSalary] = useState("")
  const [other, setOther] = useState("")
  const [itSol, setItSol] = useState("")
  const [abroad, setAbroad] = useState("")
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
              onChange={e=>setNumWeeks(e.target.value)}
              value={numWeeks}
              placeholder="Enter number of weeks"
              type="text"
            ></input>
            <label className={css.formElement}>How did you know about this vacancy?</label>
            <RadioButtonsGroup
              setOption={setWhoVac}
              value={whoVac}
              label="Marital Status"
              row={true}
              options={["Social Media","egabiFSI Employee","recruitme website","Others"]}
            />
            <label className={css.formElement}>Please specify the channel</label>
            <input
              className={`${css.input} ${css.formElement}`}
              placeholder="Others"
              onChange={e=>setOther(e.target.value)}
              value={other}
              disabled={whoVac==='Others'?false:true}
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
              onChange={e=>setSalary(e.target.value)}
              value={salary}
              type="text"
            ></input>
            <label className={css.formElement}>Are you willing to work in banking IT solutions?</label>
            <RadioButtonsGroup
              setOption={setItSol}
              value={itSol}
              label="Marital Status"
              row={true}
              options={["Yes","No"]}
            />
            <label className={css.formElement}>Are you willing to travel abroad for business missions?</label>
            <RadioButtonsGroup
              setOption={setAbroad}
              value={abroad}
              label="Marital Status"
              row={true}
              options={["Yes","No"]}
            />
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
