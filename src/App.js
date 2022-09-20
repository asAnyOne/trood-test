import React from "react";
import { Counter } from "./features/counter/Counter";
import Progress from "./features/progress/Progress";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <Progress />
      </header>
    </div>
  );
}

export default App;
