import React ,{Component} from 'react';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Diet from './Diet';
import Macro from './MacroCalculator/components/Macro'



import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {

  render(){

  return (
    <Router>
    <div className="App">
   
    


    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Get Fit</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
                <a classname="nav-link js-scroll-trigger"><link to="/" /> Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="diet">Diet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="product">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="workout">Workout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  




    
      
      
    
            </div>

            <Route exact path="/" component={Home} />
            <Route exact path="/macro" component={Macro} />
            <Route exact path="/diet" component={Diet} />
            <Footer></Footer>
            </Router>
            
  )}
        }  
        

export default App;
