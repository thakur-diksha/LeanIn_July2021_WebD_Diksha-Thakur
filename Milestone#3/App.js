import "./styles.css";
import React from "react";

export default function App() {
  const currTime = new Date().getHours();
  let greeting;
  const fontCss = {};
  if (currTime > 1 && currTime < 12) {
    greeting = "Good Morning";
    fontCss.color = "Yellow";
    fontCss.padding = "30px";
    fontCss.backgroundColor = "purple";
  } else if (currTime > 12 && currTime < 17) {
    greeting = "Good AfterNoon";
    fontCss.color = "Red";
    fontCss.padding = "30px";
    fontCss.backgroundColor = "lime";
  } else {
    greeting = "Good Evening";
    fontCss.color = "Pink";
    fontCss.padding = "30px";
    fontCss.backgroundColor = "gray";
  }
  return (
    <React.Fragment>
      <div className="App bg">
        <h1>Welcome to the React APP</h1>
        <h2>My greeting website</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div>
            <h1 style={fontCss}> {`Hello ! ${greeting}`}</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

