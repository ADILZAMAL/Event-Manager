import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import AskRegistrationStatus from "./components/AskRegistrationStatus";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import RegistrationComplete from "./components/RegistrationComplete";

const check = () => {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName("body")[0],
    windowWidth = w.innerWidth || e.clientWidth || g.clientWidth; //window width

  return windowWidth > 760; //returns true for widths larger than 760pixels
};

function App() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => {
          if (check()) return <Register />;
          else return <AskRegistrationStatus />;
        }}
      />
      <Route path="/registration-form" component={Register} />
      <Route path="/registration-complete" component={RegistrationComplete} />
    </Switch>
  );
}

export default App;
