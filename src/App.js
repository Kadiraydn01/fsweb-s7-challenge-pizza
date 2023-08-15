import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";
import Order from "./components/Order";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/success" component={Success} />
        <Route path="/order" component={Order} />
      </Switch>
    </Router>
  );
};

export default App;
