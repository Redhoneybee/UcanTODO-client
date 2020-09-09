import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// init style (global)
import { GlobalStyle } from "./GlobalStyle";

import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
};

export default App;
