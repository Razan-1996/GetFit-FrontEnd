import React, { Component } from 'react';
import './Myprofile.css';
import axios from 'axios' ;
import MyprofileInfo from './MyprofileInfo';

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
      axios.get(`http://localhost:5000/user/all`)
       .then(data =>{
       console.log("Ssssss")
       console.log(data.data)
       this.setState({
            arr:  data.data
       })
    }) }
  // state ={}
  // componentDidMount(){
  //   // console.log(jwt_decode(localStorage.token))
  // }
  render() {
    return (
      <div >
<div className="row container" >
  {this.state.arr.map((item)=>(
<MyprofileInfo name={item.name}
 email={item.email} 
 height={item.height} 
 weight={item.weight}  
 gender={item.gender}  
 birthdate={item.birthdate} 
></MyprofileInfo>
  ))}
</div>
      </div>
);
}
}

export default Myprofile;