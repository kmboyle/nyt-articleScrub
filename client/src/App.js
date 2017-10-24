import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/main";
//import Saved from "./components/saved";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/articles" component={Main} />
      </Switch>
    </div>
  </Router>;

export default App;
