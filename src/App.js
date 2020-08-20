import React from 'react';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

function App() {
  return (
    <Router basename="/react-portfolio">
      {console.log(`process.env.PUBLIC_URL: ${process.env.PUBLIC_URL}`)}
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/react-portfolio/" exact component={Home} />
          <Route path="/react-portfolio/portfolio" exact component={Portfolio} />
          <Route path="/react-portfolio/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;