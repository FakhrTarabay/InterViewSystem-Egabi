import "./App.css";
import React from "react";
import Container from "./components/UI/Container";
import css from "./components/Forms/MainPage.module.css"
// eslint-disable-next-line
import CreateTopic from "./components/Exams/CreateTopic";
// eslint-disable-next-line
// import Routes from './Routes'
// eslint-disable-next-line
import MainPageTmp from "./components/Forms/MainPageTmp";
import Routes from "./components/Routes";
function App() {
  return (
    <div className="App">
      <Container className={css.col}>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
