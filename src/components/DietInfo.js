import React, { Component } from 'react';
import '../App.css';




class DietInfo extends Component {
  state={
    info:"",
  }
 
  showInfo(){
    console.log(this.props.description)
    this.setState({info: this.props.description})
    

  }
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
                  <img className="card-img-top rounded-circle img" src={this.props.picture} alt="Card image" class="rounded-circle" />
                
                  
                   

                  
                <div className="card-body">
        <div>
          <h3>{this.props.name}</h3>
          </div> 
    
          <button onClick={() => this.showInfo()}> more info</button>
          
          
<p>

</p>
          <p>{this.state.info}</p>
          </div> 
                  </div>
                </div>
              </div>
              
              
            </div>
          
        </section>
        
      );
    }
  };

               
                
  
export default DietInfo;