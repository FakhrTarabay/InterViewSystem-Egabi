import "./App.css";
import React from "react";
import svg from './components/assets/hr_logo.svg'
import Container from "./components/UI/Container";
// eslint-disable-next-line
import CreateTopic from "./components/Exams/CreateTopic";
// eslint-disable-next-line
import Routes from "./components/Routes";
import Exam from "./components/Exams/TakingExam/Exam";
function App() {
  return (
    <>
    <header className="head">
      <img viewBox="0 0 48 48" height="50px" width="200px" src={svg} alt="asasd"/>
      </header>
    <div className="App">
      {/* <Container className="col">
        <Routes />
      </Container> */}
      <Container className="col">
        <Exam/>
      </Container>
      {/* <div className="create">
        <CreateTopic />
      </div> */}
    </div>
    </>
  );
}

export default App;
