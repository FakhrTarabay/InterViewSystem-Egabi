import "./App.css";
import React from "react";
// import Container from "./components/UI/Container";
// eslint-disable-next-line
import CreateTopic from "./components/Exams/CreateTopic";
// eslint-disable-next-line
import Routes from "./components/Routes";
function App() {
  return (
    <div className="App">
      {/* <Container className="col">
        <Routes />
      </Container> */}
      <div className="create">
        <CreateTopic />
      </div>
    </div>
  );
}

export default App;
