import React, { Component } from 'react';
import './Workout.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import Workout from './Workout';
import Axios from 'axios';

class WorkoutInfo extends Component {
  deleteWorkout (id) {
    console.log(id)
  Axios.delete(`http://localhost:5000/workout/${id}`)
     }
    render() {
        const style = {
            width: '200px',
            height: '200px' 
          }



        return (
          <Card>
            
                <div className="WorkoutInfo" >
              <div id="Workout12">
              <CardImg top width="100%" src={this.props.picture} alt=""  style={{style}} />
                <CardBody>
                <CardTitle>{this.props.name}</CardTitle>
                <CardText>{this.props.description}</CardText>
                <button onClick={()=>this.deleteWorkout(this.props.id)}></button>
                </CardBody>
        
           </div>
            </div>
            </Card>
        );
    }
}
export default WorkoutInfo;