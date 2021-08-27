import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainDashboard from "./pages/dashboard"
import Login from "./pages/login/login"
import Register from "./pages/signUp/signUp"


export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={MainDashboard} exact />
        <Route path="/user/login" component={Login}/>
        <Route path="/user/Register" component={Register}/>
      </Switch>
    );
  }
}

export default Routes;
