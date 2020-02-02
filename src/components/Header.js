import React, {Component} from 'react';
import Home from './Home';
import Diet from './Diet';
import Product from './Product';
import Macro from '../MacroCalculator/components/Macro';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; 

class Header extends Component {
  render () {
    return (
 
      <Router>


<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger"><Link to="/">GetFit</Link></a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto my-2 my-lg-0">

          <li class="nav-item">
        <a className="nav-link js-scroll-trigger"><Link to="/Diet">Diet</Link></a>
          </li>

          <li class="nav-item">
        <a className="nav-link js-scroll-trigger"><Link to="/Product">Product</Link></a>
          </li>

          <li class="nav-item">
        <a className="nav-link js-scroll-trigger"><Link to="/Workout">Workout</Link></a>
          </li>

          <li class="nav-item">
        <a className="nav-link js-scroll-trigger"><Link to="/MacroCalculator">Macro Calculator</Link></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Route exact path="/" component={Home} />
  <Route exact path="/Diet" component={Diet} />
  <Route exact path="/MacroCalculator" component={Macro} />
  <Route exact path="/Product" component={Product} />
  </Router>
   
   )}}

export default Header;