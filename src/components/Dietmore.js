import React, { Component } from 'react';
import '../App.css';



class Dietmore extends Component {
    render() {
        const style = {
            width: '200px',
            height: '200px' 
          }
        return (
          
            <div className="DitInfo" >
            <div id="Diit12">
         <img src={this.props.picture} alt=""  style={{style}}  ></img>     
         <p>{this.props.name}</p>
         <p>{this.props.description}</p>
                   
         </div>
            </div>
        );
    }
}

          

export default Dietmore;