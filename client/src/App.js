import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// will need to import components and pages here
import Home from "./pages/home";
import Detail from "./pages/detail";
import Nav from "./components/nav";
import Saved from "./pages/saved";

import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path={["/saved"]}>
          <Saved />
        </Route>
        <Route exact path="/books/:id">
          <Detail />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
