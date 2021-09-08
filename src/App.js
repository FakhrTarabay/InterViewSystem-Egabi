import "./App.css";
import React from "react";
import Container from "./components/UI/Container";
// eslint-disable-next-line
// import 
import CreateTopic from "./components/Exams/CreateTopic";
import Routes from "./components/Routes";
function App() {
  return (
    <div className="App">
      <Container className="col">
        <Routes />
      </Container>
    </div>
  );
}

export default App;
