import './App.css';
import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/HomePage/Footer/Footer';
import SignUp from './components/pages/HomePage/SignUp/SignUp';
import Products from './components/pages/HomePage/Products/Products';
import Services from './components/pages/HomePage/Services/Services';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
    
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
