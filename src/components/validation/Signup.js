import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import axios from 'axios'
import { toast } from 'react-toastify';

class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:"",
            password:"",
            name: "",
            height: "",
            weight: "",
            gender: "",
            birthdate: "",
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
                                Password conformation
                            </Label>
                            <Input 
                                type="password"
                                name= {'password_conf'}
                                placeholder = {'Enter your password conformation'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>
                                Name
                            </Label>
                            <Input 
                                name= {'name'}
                                value={this.state.name} 
                                placeholder = {'Enter your name'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>
                                Height
                            </Label>
                            <Input 
                                name= {'height'}
                                value={this.state.height} 
                                placeholder = {'Enter your height'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>
                                Weight
                            </Label>
                            <Input 
                                name= {'weight'}
                                value={this.state.weight} 
                                placeholder = {'Enter your weight'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>
                                Gender
                            </Label>
                            <Input 
                                name= {'gender'}
                                value={this.state.gender} 
                                placeholder = {'Enter your gender'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>
                                Birthdate
                            </Label>
                            <Input 
                                name= {'birthdate'}
                                value={this.state.birthdate} 
                                placeholder = {'Enter your birthdate'}
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
