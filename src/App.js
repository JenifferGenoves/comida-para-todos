import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from './views/home';
import AboutUs from './views/aboutUs';
import Projects from './views/projects';
import Campaigns from './views/campaigns';
import Collaborators from './views/collaborators';
import Contact from './views/contact';
import Donate from './views/donate';
import Transparency from './views/transparency';
import './App.css';
import UrbanGardens from './views/urbanGardens';
import Foods from './views/foods';
import Class from './views/class';
import Skills from './views/skill'
import BeVolunteer from './views/beVolunteer';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          render={() => <Home />}
        />
        <Route
          exact path="/aboutUs"
          render={() => <AboutUs />}
        />
        <Route
          exact path="/projects"
          render={() => <Projects />}
        />
        <Route
          exact path="/campaings"
          render={() => <Campaigns />}
        />
        <Route
          exact path="/collaborators"
          render={() => <Collaborators />}
        />
        <Route
          exact path="/transparency"
          render={() => <Transparency />}
        />
        <Route
          exact path="/contact"
          render={() => <Contact />}
        />
        <Route
          exact path="/donate"
          render={() => <Donate />}
        />
          <Route
          exact path="/donate/beVolunteer"
          render={() => <BeVolunteer />}
        />
        <Route
          exact path="/donate/urbangarden"
          render={() => <UrbanGardens />}
        />
        <Route
          exact path="/donate/foods"
          render={() => <Foods />}
        />
        <Route
          exact path="/donate/class"
          render={() => <Class />}
        />
        <Route
          exact path="/donate/Hability"
          render={() => <Skills />}
        />
      </Switch>
    </Router >
  );
}

export default App;
