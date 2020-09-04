import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Navbar from "./components/layout/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
            </Route>
            <Route path="/users">
            </Route>
            <Route path="/">
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
