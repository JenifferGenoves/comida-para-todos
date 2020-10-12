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
import Foods from './views/foods'

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
          exact path="/donate"
          render={() => <Donate />}
        />
        <Route
          exact path="/donate/urbangarden"
          render={() => <UrbanGardens />}
        />
        <Route
          exact path="/donate/foods"
          render={() => <Foods />}
        />
      </Switch>
    </Router >
  );
}

export default App;

























/* import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */