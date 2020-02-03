import React, { Component } from 'react';
import './App.css';
class WorkoutInfo extends Component {
    render() {
        const style = {
            width: '200px',
            height: '200px' 
          }
        return (
                <div className="WorkoutInfo" >
              <div id="Product12">
           <img src={this.props.picture} alt=""  style={{style}}  ></img>     
           <p>{this.props.name}</p>
           <p>{this.props.description}</p>
          
          
           </div>
            </div>
        );
    }
}
export default WorkoutInfo;