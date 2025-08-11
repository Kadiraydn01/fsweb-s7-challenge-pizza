import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";
import Order from "./components/Order";
import ToastNotification from "./components/ToastNotification";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/success" component={Success} />
          <Route path="/order" component={Order} />
        </Switch>
        <ToastNotification />
      </div>
    </Router>
  );
};

export default App;
