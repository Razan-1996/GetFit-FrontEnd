import React, {Component} from 'react'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import {withRouter} from 'react-router-dom';
import './Account.css';


class Signin extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:"",
            password:"",
            isActive: false
        }
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        setTimeout(() => {
            this.setState(prevState => {return {isActive: !prevState.isActive}})
            axios.post('http://localhost:5000/user/login' , 
               { email: this.state.email, password: this.state.password}
            )
            .then(r=>{
               
                
                console.log(r.data.log);
                if (r.data.log) {
                    localStorage.setItem('token', r.data.token)
                    this.props.history.push('/myprofile')

                   
                    this.props.loginStatus(true)

                    toast.success("Logged In successfully", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                    });

                }else{

                    toast.warning(r.data.message[0], {
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
                toast.error("Wrong credentials try again!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                });
                // alert.error("try again!")
            })
        },2000)
        this.setState(prevState => {return {isActive: !prevState.isActive}})
    }
    
    render(){
        return(
        <div>
         
           <h1 className='page-title'>Sign In</h1>
           <Container>
                <Form>
                    <FormGroup>
                        <Label>
                            Username
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
                    <Button 
                        onClick= {this.handleSubmit}>    
                        Sign In
                    </Button>
                </Form>
           </Container>
           
        </div>
        )
    }
}

export default withRouter(Signin);



