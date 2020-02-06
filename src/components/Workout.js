import React, { Component } from 'react';
import axios from 'axios';
import WorkoutInfo from './WorkoutInfo';
import Addworkout from './Addworkout';

class Workout extends Component {
  constructor() {
    super()
    this.state = {
      arr: [],
      picture: "",
      name: "",
      description: "",
    }
  }

  componentDidMount() {
    // axios.get(`https://cors-anywhere.herokuapp.com/https://ifit-ga.herokuapp.com/workouts.json`)
    axios.get('http://localhost:5000/workout/all')

      .then(data => {
        console.log("Ssssss")
        console.log(data)
        this.setState({
          arr: data.data.work
        })
      })
  }
filterTheArrayOfWorkout =(id )=>{

  this.setState({
    arr : this.state.arr.filter(ele =>{
      return ele._id !== id 
    })
  })

}


  render() {

    return (
      <div >
        <section className="bg-light page-section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Workouts</h2>

              </div>
            </div>
            <div className="row container" >
              {this.state.arr.map((item) =>
                <WorkoutInfo filterTheArrayOfWorkout = {this.filterTheArrayOfWorkout}
                name={item.name}
                  picture={item.picture}
                  // price={item.price}
                  description={item.description}
                  id={item._id}
                ></WorkoutInfo>
              )}
              <Addworkout></Addworkout>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Workout;