import React, { Component } from 'react';
import axios from 'axios'
class Edit extends Component {

    state ={}

    componentDidMount(){
        console.log(this.props.match.params.id)
        var id = this.props.match.params.id
        axios.get(`http://localhost:5000/workout/${id}`)
        .then(res => {
            console.log(res.data.work)
            this.setState({work : res.data.work})

        }).catch(err => console.log(err))
    }

    onUpdateSubmit = ()=>{
        var id = this.props.match.params.id
        axios.put(`http://localhost:5000/workout/${id}` , this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    onChange = ({target :{name , value} })=>{
        this.setState({
            [name] : value
        })
        console.log("ss")
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <section class="page-section" id="contact">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <h2 class="section-heading text-uppercase">edit Workouts</h2>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input onChange ={this.onChange}  name = "name"class="form-control" id="name" type="text" placeholder={this.state.work && this.state.work.name} required="required" />
                                                <p class="help-block text-danger"></p>
                                            </div>
                                            <div class="form-group">
                                                <input onChange ={this.onChange}  name = "description" class="form-control" id="name" type="text" placeholder={this.state.work && this.state.work.description} required="required"  />
                                                <p class="help-block text-danger"></p>
                                            </div>
                                            <div class="form-group">
                                                <input onChange ={this.onChange}  name = "picture" class="form-control" id="name" type="text" placeholder="picture"  required="required" />
                                                <p class="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div>
                                            <div id="success"></div>
                                            <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" onClick ={this.onUpdateSubmit}>edit</button>
                                        </div>




                                    </div>
                               
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Edit;