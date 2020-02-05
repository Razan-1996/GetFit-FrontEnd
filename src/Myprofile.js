import React, { Component } from 'react';
import './Myprofile.css';
import axios from 'axios' ;
import WorkoutInfo from './MyprofiletInfo';
import jwt from 'jwt-decode'
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
      axios.get(`https://cors-anywhere.herokuapp.com/https://ifit-ga.herokuapp.com/workouts.json`)
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
//     render() {

//         return (
            
//                 <div className="container5">
//         <div className="row">
          
//           <div className="col-md-7 ">
//             <div className="panel panel-default">
//               <div className="panel-heading">  <h4>User Profile</h4></div>
//               <div className="panel-body">
//                 <div className="box box-info">
//                   <div className="box-body">
//                     <div className="col-sm-6">
//                       <div align="center"> <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" className="img-circle img-responsive" /> 
//                         <input id="profile-image-upload" className="hidden" type="file" />
//                         <div style={{color: '#999'}}>click here to change profile image</div>
//                         {/*Upload Image Js And Css*/}
//                       </div>
//                       <br />
//                       {/* /input-group */}
//                     </div>
//                     <div className="col-sm-6">
//                       <h4 style={{color: '#00b1b1'}}>Prasad Shankar Huddedar </h4>
//                       <span><p>Aspirant</p></span>            
//                     </div>
//                     <div className="clearfix" />
                    
//                     <div className="bot-border" />
//                     <div className="col-sm-5 col-xs-6 tital ">Name:</div><div className="col-sm-7"> Huddedar</div>
//                     <div className="clearfix" />
//                     <div className="bot-border" />
//                     <div className="col-sm-5 col-xs-6 tital ">Date Of Joining:</div><div className="col-sm-7">15 Jun 2016</div>
//                     <div className="clearfix" />
//                     <div className="bot-border" />
//                     <div className="col-sm-5 col-xs-6 tital ">Date Of Birth:</div><div className="col-sm-7">11 Jun 1998</div>
//                     <div className="clearfix" />
//                     <div className="bot-border" />
//                     <div className="col-sm-5 col-xs-6 tital ">Place Of Birth:</div><div className="col-sm-7">Shirdi</div>
//                     <div className="clearfix" />
//                     <div className="bot-border" />
//                     <div className="col-sm-5 col-xs-6 tital ">Nationality:</div><div className="col-sm-7">Indian</div>
//                     <div className="clearfix" />
//                     <div className="bot-border" />
//                     <div className="col-sm-5 col-xs-6 tital ">Relition:</div><div className="col-sm-7">Hindu</div>
//                     {/* /.box-body */}
//                   </div>
//                   {/* /.box */}
//                 </div>
//               </div> 
//             </div>
//           </div>  
//         </div>
//       </div>
   
         
//         );
//     }
// }

export default Myprofile;