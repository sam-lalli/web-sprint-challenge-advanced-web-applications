import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Login</Link>

        
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/protected' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
