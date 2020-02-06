// import React, { Component } from 'react';
// import axios from 'axios';
// import Goalinfo from './Goalinfo';
// import Addgoal from '../AddGoal';

// class Goal extends Component {
//   constructor() {
//     super()
//     this.state = {
//       arr: [],
//       text: "",
//     }
//   }

//   componentDidMount() {
//     axios.get('http://localhost:5000/goal/all')

//       .then(data => {
//         console.log("Ssssss")
//         console.log(data)
//         this.setState({
//           arr: data.data.work
//         })
//       })
//   }

// filterTheArrayOfWorkout =(id )=>{

//   this.setState({
//     arr : this.state.arr.filter(ele =>{
//       return ele._id !== id 
//     })
//   })

// }

//   render() {

//     return (
//       <div >
//         <section className="bg-light page-section" id="portfolio">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12 text-center">
//                 <h2 className="section-heading text-uppercase">Workouts</h2>

//               </div>
//             </div>
//             <div className="row container" >
              
//                 <Goalinfo 
//                 name={this.state.text}
//                 ></Goalinfo>
//               )}
//      <Addgoal></Addgoal>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

// export default Goal;