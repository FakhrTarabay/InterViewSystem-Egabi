import "./App.css";
import React from "react";
import Header from "./components/UI/Header";
import Routes from "./components/Routes";
function App() {
  return (
    <>
      <Header/>
      <div className="App">
        <Routes />
      </div>
    </>
  );
}

export default App;
