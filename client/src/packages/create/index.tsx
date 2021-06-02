import Main from "./main";
import * as React from "react";
import Toolbar from "../../util/Toolbar";

export default function Create() {
  return (
    <div className="bg-dark-400 w-screen h-screen flex flex-col">
      <Toolbar />
      <Main />
    </div>
  );
}
