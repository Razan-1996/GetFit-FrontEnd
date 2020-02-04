import React, { Component } from 'react';
import '../App.css';
import Dietmore from './Dietmore';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; 

class DietInfo extends Component {
    render() {
        const style = {
            width: '200px',
            height: '200px' 
          }
        return (
          
          <section className="about-cards-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 card-wrapper">
                <div className="card card-style">
                  <img className="card-img-top rounded-circle circle-image" src={this.props.picture} alt="Card image" />
                
                  
                   

                  
                <div className="card-body">
        <div>
          <Link to="/Dietmore">{this.props.name}</Link>{' '}
          </div>
          </div>
          <Router>
<div>
<Route exact path="/Dietmore" component={Dietmore} />
</div>
          </Router>
          
               
           
       
                   
                  </div>
                </div>
              </div>
              
              
            </div>
          
        </section>
        
      );
    }
  };

               
                
  
export default DietInfo;