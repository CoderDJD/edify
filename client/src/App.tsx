import * as React from "react";
import { lazy, Suspense } from "react";
import Slash from "./util/sroute";
import Navigator from "./util/Navigator";
import { Redirect, Route } from "react-router-dom";
const Main = lazy(() => import("./packages/main"));
const Create = lazy(() => import("./packages/create"));

export default function App() {
  return (
    <Suspense fallback={<div className="bg-dark-400 w-screen h-screen"></div>}>
      <div className="bg-dark-400 w-screen h-screen">
        <Route component={Slash} path="/" />
        <Route component={Main} path="/feed" />
        <Route component={Create} path="/create" />
        <Navigator></Navigator>
      </div>
    </Suspense>
  );
}
