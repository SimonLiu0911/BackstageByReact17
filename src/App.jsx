import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/login" component={Admin}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
