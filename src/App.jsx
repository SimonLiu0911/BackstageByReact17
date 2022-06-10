// App.jsx file
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./pages/admin/admin";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Admin} exact></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
