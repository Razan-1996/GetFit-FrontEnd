import React, { Component } from 'react';
import './Myprofile.css';
import axios from 'axios' ;
import MyprofileInfo from './MyprofileInfo';
import jwt_decode from 'jwt-decode'
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
                     weight: user.user.height,
                     gender: user.user.gender,
                     birthdate: user.user.birthdate
      })
      // axios.get(`http://localhost:5000/user/${user.user._id}`)
      //  .then(data =>{
      //  console.log("Ssssss")
      //  console.log(data.data)
      //  this.setState({
      //       arr:  data.data
      //  })
    // }) }
  // state ={}
  // componentDidMount(){
  //   // console.log(jwt_decode(localStorage.token))
  // }
    }
  render() {

    console.log(this.state)
    return (

<div className="row container" >

<MyprofileInfo 
//  name={item.name}
//  email={item.email} 
//  height={item.height} 
//  weight={item.weight}  
//  gender={item.gender}  
//  birthdate={item.birthdate} 
></MyprofileInfo>

</div>

);
}
}

export default Myprofile;