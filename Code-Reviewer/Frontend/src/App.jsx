import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <h1 className="title">Code-Reviewer</h1>
        <div className="left">
          <div className="code"></div>
            <button className="review">Review</button>
        </div>
        <div className="right"></div>
      </main>
    </>
  );
}

export default App;
