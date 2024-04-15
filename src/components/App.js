import React from "react";
import CountdownTimer from "./Timer";
import UserList from "./UList";
import WindowSize from "./WindowSize";

function App() {
  return (
      <div>
        <CountdownTimer />
        <UserList />
        <WindowSize />
      </div>
  );
}

export default App;