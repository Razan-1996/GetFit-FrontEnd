import React, {Component} from 'react'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
// import Loading from '../addson/Loading'
import { toast } from 'react-toastify';

class Signin extends React.Component {
    constructor(props){
      super(props);
      this.handleSignup = this.handleSignup.bind(this);
    }
  handleSignup(e) {
      e.preventDefault();
      let that = this
      let email = this.props.currentUser
      axios.post('http://localhost:3000/users/sign_in', {
        user: {
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
          password_confirmation: document.getElementById("password_confirmation").value
        }
      })
      .then(function(response){
        that.props.changePage("delete");
        that.props.updateCurrentUser(email);
      })
      .catch(function(error){
        console.log(error)
      })
  }
  render() {
    return (
        <div>
          <h2>Signup</h2>
          <form>
            <input id="email" placeholder="email"/>
            <input id="password" placeholder="password"/>
            <input id="password_confirmation" placeholder="retype password"/>
            <button onClick={this.handleSignup}>Submit</button>
          </form>
          <button onClick={() => this.props.changePage("login")}>Back to Login</button>
        </div>
      );
    };
  };
  

// let base_url =  'http://localhost:3000/users/sign_in'


// let base_url = 'http://localhost:3000/users/sign_in'


// export default class SignIn extends React.Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             email:"",
//             password:"",
//             isActive: false
//         }
//     }

//     handleChange = e => {
//         e.preventDefault()
//         this.setState({[e.target.name]: e.target.value})
//     }

//     handleSubmit = () => {
//         setTimeout(() => {
//             this.setState(prevState => {return {isActive: !prevState.isActive}})
//             axios.post('http://localhost:3000/users/sign_in' , 
//                 {auth: {email: this.state.email, password: this.state.password}}
//             )
//             .then(r=>{
    // handleSubmit = () => {
    //     setTimeout(() => {
    //         this.setState(prevState => {return {isActive: !prevState.isActive}})
    //         axios.post(`${base_url}/users/sign_in` , 
    //             {auth: {email: this.state.email, password: this.state.password}}
    //         )
    //         .then(r=>{
                
                
//                 console.log(r);
//                 if (r.data.jwt) {
//                     localStorage.setItem('token', r.data.jwt)
//                     this.props.loginStatus(true)
//                     toast.success("Logged In successfully", {
//                         position: "top-center",
//                         autoClose: 5000,
//                         hideProgressBar: false,
//                         closeOnClick: false,
//                         pauseOnHover: false,
//                         draggable: false,
//                     });
//                     // alert.success("Logged In successfully")
//                     // this.props.history.push('/')
//                 }else{
//                     // alert.show(r.data.message[0])
//                     toast.warning(r.data.message[0], {
//                         position: "top-center",
//                         autoClose: 5000,
//                         hideProgressBar: false,
//                         closeOnClick: false,
//                         pauseOnHover: false,
//                         draggable: false,
//                     });
//                 }
                
//             })
//             .catch(e=>{
//                 toast.error("Wrong credentials try again!", {
//                     position: "top-center",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: false,
//                     pauseOnHover: false,
//                     draggable: false,
//                 });
//                 // alert.error("try again!")
//             })
//         },2000)
//         this.setState(prevState => {return {isActive: !prevState.isActive}})
//     }
    
//     render(){
//         return(
//         <div>
//            {/* <Loading isActive={this.state.isActive}></Loading> */}
//            <h1 className='page-title'>Sign In</h1>
//            <Container>
//                 <Form>
//                     <FormGroup>
//                         <Label>
//                             Username
//                         </Label>
//                         <Input 
//                             name= {'email'}
//                             value={this.state.email} 
//                             placeholder = {'Enter your email'}
//                             onChange = {e => this.handleChange(e)}
//                         />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label>
//                             Password
//                         </Label>
//                         <Input 
//                             type="password"
//                             name= {'password'}
//                             value={this.state.password} 
//                             placeholder = {'Enter your password'}
//                             onChange = {e => this.handleChange(e)}
//                         />
//                     </FormGroup>
//                     <Button 
//                         onClick= {this.handleSubmit}>    
//                         Sign In
//                     </Button>
//                 </Form>
//            </Container>
           
//         </div>
//         )
//     }
// }

export default Signin