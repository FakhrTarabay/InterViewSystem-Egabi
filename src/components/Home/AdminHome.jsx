import React,{useState} from "react";
import { Redirect } from "react-router";
import AH from "./AdminHome.module.css";
import ImageButton from '../UI/ComplxBtn'
const AdminHome = () => {
    const [flag,setFlag] = useState(false)
    if(flag){
       return <Redirect push to='/TopicExam'/>
    }
  return (
    <div className={AH.rowSB}>
      <div className={AH.rowSS}>
        <h1>Welcome Admin!</h1>
      </div>
      {/* <div className={AH.rowSS}>
        <button className={AH.box} onClick={()=>setFlag(true)}>
          <p className={AH.para}>Manage Topics & Exams</p>
        </button>
        <button className={AH.box}>
          <p className={AH.para}>View Results</p>
        </button>
        <button className={AH.box}>
          <p className={AH.para}>View Information</p>
        </button>
      </div> */}
      <ImageButton setFlag={setFlag}/>
    </div>
  );
};

export default AdminHome;
