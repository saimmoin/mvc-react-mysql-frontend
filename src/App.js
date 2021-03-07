import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";
import { DisplayProfile } from "./components/DisplayProfile";

function App() {
  return (
    <div>
      {/* Start Of NavBar Code */}
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Tutorials Application
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      {
        //End Of NavBar Code
      }

      <div className="container mt-3">
        <Switch>
          {
            // Entry Points
            //1. /tutorials
            //2. /add
            //3. tutorials/:id
            //4. /profile
            //5. /
          }

          {
            //Components
            //1. TutorialsList
            //2. AddTutorial
            //3. Tutorial
            //4. DisplayProfile
            //5. App
          }
          <Route exact path={["/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
          <Route path="/profile" component={DisplayProfile} />
          <Route exact path="/" component={TutorialsList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
