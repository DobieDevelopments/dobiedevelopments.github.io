import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Header-info">
        TODO:
        <br />
        think of cool design for website <br />
        implement the cool web design things <br />
        fix auto-deployment for gh-pages
        <br /> ???
        <br /> treat self to a nice dinner. 🍉
        <br />
      </div>
      <div className="Green">
        <br />
      </div>
      <div className="App-content">
        <p>
          {"Go back to GitHub: "}
          <a
            className="App-link"
            href="https://github.com/DobieDevelopments/"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here!
          </a>
        </p>
        <p>
          {"Unity: "}
          <a
            className="App-link"
            href="https://DobieDevelopments.github.io/popgame/"
            target="_blank"
            rel="noopener noreferrer"
          >
            pop pop game
          </a>
          {" by John Dobie."}
        </p>
      </div>
    </div>
  );
}

export default App;
