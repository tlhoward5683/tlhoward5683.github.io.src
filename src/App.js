import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Summary from './pages/Summary/Summary';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import Interests from './pages/Interests/Interests';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Summary/>
          </Route>
          <Route path="/skills" exact>
            <Skills/>
          </Route>
          <Route path="/experience" exact>
            <Experience/>
          </Route>
          <Route path="/education" exact>
            <Education/>
          </Route>
          <Route path="/interests" exact>
            <Interests/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;