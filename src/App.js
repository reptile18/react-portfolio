import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GraphicDesign from './pages/GraphicDesign';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    window.addEventListener("load", () => {setLoaded(true)});
  }, []);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {console.log(`process.env.PUBLIC_URL: ${process.env.PUBLIC_URL}`)}
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact render={() => <Home loaded={loaded} />}/>
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/graphicdesign" exact component={GraphicDesign} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
