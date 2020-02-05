import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import axios from 'axios'
import { toast } from 'react-toastify';

// class Signup extends React.Component {
//     constructor(props){
//       super(props);
//       this.handleSignup = this.handleSignup.bind(this);
//     }
//   handleSignup(e) {
//       e.preventDefault();
//       let that = this
//       let email = this.props.currentUser
//       axios.post('http://localhost:3000/users/sign_up', {
//         user: {
//           email: document.getElementById("email").value,
//           password: document.getElementById("password").value,
//           password_confirmation: document.getElementById("password_confirmation").value
//         }
//       })
//       .then(function(response){
//         that.props.changePage("delete");
//         that.props.updateCurrentUser(email);
//       })
//       .catch(function(error){
//         console.log(error)
//       })
//   }
//   render() {
//     return (
//         <div>
//           <h2>Signup</h2>
//           <form>
//             <input id="email" placeholder="email"/>
//             <input id="password" placeholder="password"/>
//             <input id="password_confirmation" placeholder="retype password"/>
//             <button onClick={this.handleSignup}>Submit</button>
//           </form>
//           <button onClick={() => this.props.changePage("login")}>Back to Login</button>
//         </div>
//       );
//     };
//   };

class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:"",
            password:"",
            isLoggedIn: false
        }
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        setTimeout(() => {
            this.setState(prevState => {return {isActive: !prevState.isActive}})
  
            let user_id = null
            axios.post('http://localhost:5000/user/register',this.state)
            .then(r=>{
                console.log(r);
                user_id = r.data.user.id
                this.setState({
                    isLoggedIn: true
                })
                if (user_id != null) {
                    toast.success("Signed Up successfully", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                    });
                   
                }else{
                    toast.error("User not created!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                    });
                }
            })
            .catch(e=>{
                console.log(e);
                toast.error("Something went wrong try again! Or contact our team", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                });
            })
        },2000)
        this.setState(prevState => {return {isActive: !prevState.isActive}})
    }

    render(){
        return(
        <div>
            {/* <Loading isActive={this.state.isActive}></Loading> */}
            <h1 className='page-title'>Sign Up</h1>
           <Container>
                <Form>
                    <Col>
                        <FormGroup>
                            <Label>
                                Email
                            </Label>
                            <Input 
                                name= {'email'}
                                value={this.state.email} 
                                placeholder = {'Enter your email'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>
                       
                        <FormGroup>
                            <Label>
                                Password
                            </Label>
                            <Input 
                                type="password"
                                name= {'password'}
                                value={this.state.password} 
                                placeholder = {'Enter your password'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Password
                            </Label>
                            <Input 
                                type="password"
                                name= {'password_conf'}
                                placeholder = {'Enter your password conformation'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Button 
                        onClick= {this.handleSubmit}>    
                        Sign Up
                    </Button>
                </Form>
           </Container>
        </div>
        )
    }
}

export default Signup;
