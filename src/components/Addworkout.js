import React, { Component } from 'react';
import axios from 'axios' ;

class Addworkout extends Component {

    state = {
        name: '',
        picture: '',
        description: ''

      }

      handleChange = event => { 

        this.setState({ 
          name: event.target.value ,
       
            
        });
      }


      handleChange2 = event => {
        this.setState({ 
    
            picture: event.target.value ,
   
            
        });
      }

      handleChange3 = event => {
        this.setState({ 
         
            description: event.target.value ,
 
            
        });
      }

      handleSubmit = event => {
        // console.log(this.state.picture)
        // console.log(this.state.description)
        // event.preventDefault();
        // const Addworkout = {
        //   name: this.state.name ,
        //   picture: this.state.picture,
        //   description: this.state.description,
          
        // };

        // axios.post(`http://localhost:5000/workout/`, { Addworkout })
        //   .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        //     console.log("lakamv")
        //   })
        axios({
          method: 'post',
          url: 'http://localhost:5000/workout',
          headers: {}, 
          data: {
            name: this.state.name, // This is the body part
            description: this.state.description, // This is the body part
            picture: this.state.picture, // This is the body part

          }
        });
      }




    render() {
        return (
            <div>
                <section class="page-section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Add Workouts</h2>
    
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.handleSubmit}>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input class="form-control" id="name" type="text" placeholder=" Name *" required="required"   onChange={this.handleChange}/>
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="name" type="text" placeholder=" Picture *" required="required"    onChange={this.handleChange2}/>
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="name" type="text" placeholder=" Description *" required="required"    onChange={this.handleChange3}/>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div>
              <div id="success"></div>
                <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Add</button>
              </div>
              
              
            
             
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
          </div>
        )
      }
}

export default Addworkout;