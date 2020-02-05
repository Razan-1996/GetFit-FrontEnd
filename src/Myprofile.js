import React, { Component } from 'react';
import './Myprofile.css';
import MyprofileInfo from './MyprofileInfo';
import jwt_decode from 'jwt-decode';
class Myprofile extends Component { 
  constructor(){
    super()
    this.state ={
        arr: [],
        name: "",
        email: "",
        height: "",
        weight: "",
        gender: "",
        birthdate: "",
    }
    }

    componentDidMount(){
      var user = jwt_decode(localStorage.token)
      this.setState({
                     name : user.user.name,
                     email : user.user.email,
                     height : user.user.height,
                     weight: user.user.weight,
                     gender: user.user.gender,
                     birthdate: user.user.birthdate
      })
    }
  render() {
    console.log(this.state)
    return (

<div className="row container" >
<MyprofileInfo 
 name={this.state.name}
 email={this.state.email} 
 height={this.state.height} 
 weight={this.state.weight}  
 gender={this.state.gender}  
 birthdate={this.state.birthdate} 
></MyprofileInfo>
</div>

);
}
}

export default Myprofile;