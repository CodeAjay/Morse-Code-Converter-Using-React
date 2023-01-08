import "./styles.css";
import { useState } from "react";
const App = () => {
  const [cd, setCd] = useState("");
  const [cd1, setCd1] = useState("");

  const morse = require("morse-code-converter");

  const change = () => {
    const code = morse.textToMorse(document.getElementById("txtr").value); // .... . -.--   .... --- .--   .- .-. .   -.-- --- ..- ..-..
    setCd(code); // HEY HOW ARE YOU?
  };
  const change1 = () => {
    const code1 = morse.morseToText(document.getElementById("txtr1").value); // .... . -.--   .... --- .--   .- .-. .   -.-- --- ..- ..-..
    setCd1(code1); // HEY HOW ARE YOU?
  };

  return (
    <div className="App row">
      <h1>Morse Code Converter</h1>
      <div className="box col-md-6">
        <h2>Enter a Text to convert to morse Code</h2>
        <textarea rows="10" cols="50" type="text" id="txtr" onChange={change} />
        <br />
        {/* <button id="convert" className="btn btn-success" onClick={change}>
        Convert
      </button> */}
        <h4>Your Converted Text is:</h4>
        <p id="result">{cd}</p>
      </div>
      <div className="box col-md-6">
        <h2>Enter morse code to convert to text</h2>
        <textarea
          rows="10"
          cols="50"
          type="text"
          id="txtr1"
          onChange={change1}
        />
        <br />
        {/* <button id="convert" className="btn btn-success" onClick={change}>
        Convert
      </button> */}
        <h4>Your Converted Code is:</h4>
        <p id="result">{cd1}</p>
      </div>
    </div>
  );
};
export default App;
