import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Routes from "./lib/router.js";
import Navbar from "./components/layout/navbar";

const switchRoutes = (
  <Switch>
    {Routes.map((prop, key) => {
      console.log(prop, key)
      return (
        <Route
          exact
          path={prop.path}
          component={prop.component}
          key={key}
        />
      );
    })}
  </Switch>
);

function App() {
  return (
    <div>
      <Navbar />
      <div>{switchRoutes}</div>
    </div>
  );
}

export default App;
