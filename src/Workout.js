import React, { Component } from 'react';
import axios from 'axios' ;
import WorkoutInfo from './WorkoutInfo';
class Workout extends Component {
  constructor(){
    super()
    this.state ={
        arr: [],
        picture: "",
        name: "",
        description: "",
       

    }
}

componentDidMount(){
  axios.get(`https://cors-anywhere.herokuapp.com/https://ifit-ga.herokuapp.com/workouts.json`)
   .then(data =>{
   console.log("Ssssss")
   console.log(data.data)
   this.setState({
        arr:  data.data
   })
}) }



    render() {

        return (
          <div >
          <section className="bg-light page-section" id="portfolio">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase">Workouts</h2>
      <h3 className="section-subheading text-muted">All Workouts.</h3>
    </div>
  </div>
  <div className="row container" >
      {this.state.arr.map((item)=>(
<WorkoutInfo name={item.name} picture={item.picture} price={item.price}
description={item.description}  
></WorkoutInfo>
      ))}
  
  </div>
          </div>
          </section>
      </div>
  );
}
}

export default Workout;