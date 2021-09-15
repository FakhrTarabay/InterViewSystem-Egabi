import "./App.css";
import React from "react";
import svg from "./components/assets/hr_logo.svg";
// eslint-disable-next-line
import Container from "./components/UI/Container";
// eslint-disable-next-line
import CreateTopic from "./components/Exams/CreateTopic";
// eslint-disable-next-line
import Routes from "./components/Routes";
// eslint-disable-next-line
import CreateExam from "./components/Exams/CreateExam/CreateExam";
function App() {
  return (
    <>
      <header className="head">
        <img
          viewBox="0 0 48 48"
          height="50px"
          width="200px"
          src={svg}
          alt="logo"
        />
      </header>
      <div className="App">
        {/* <Container className="col">
        <Routes />
      </Container> */}
        <div className="create">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly",
              paddingBottom: "30px",
            }}
          >
            <CreateTopic />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <CreateExam />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
