import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// pages
import Home from "../home/home";
import Role from "../role/role";

const Admin = () => {
  return (
    <div>
      test
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/role" component={Role}></Route>
        {/* <Redirect to="/home" /> */}
      </Switch>
    </div>
  );
};

export default Admin;
