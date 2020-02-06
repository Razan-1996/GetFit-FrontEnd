import React, {Component} from 'react';
import Home from './Home';
import Diet from './Diet';
import Workout from './Workout';
import Product from './Product';
import Macro from '../MacroCalculator/components/Macro';
import axios from 'axios';
import Signup from './validation/Signup';
import Signin from './validation/SignIn';
import Myprofile from '../Myprofile';
import Edit from './Edit';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; 

  class Header extends Component {
    constructor(props){
      super(props)
      this.state={
        isLoggedIn: false
      }
    }

  componentDidMount=()=>{
    axios.get('http://localhost:5000/user/login', {headers:{ "Authorization": localStorage.getItem("token")}})
    .then(res => {
        // this.setState({isLoggedIn: res.data})
        console.log(res.data);
    });
  }

  loginStatus = () =>{
    this.setState({isLoggedIn: true})
  }

  logout = () =>{
    localStorage.removeItem("token")
    this.setState({isLoggedIn: false});
    // this.setState({isLoggedIn: false})
    console.log(localStorage.getItem('token'))
    console.log(this.check())
  }

  check = () => {
    if (localStorage.getItem('token')) 
     return true
     return false 
  }

  render () {

    const loggedInLinks = (
      <>
                <li className="nav-item">
        <a className="nav-link js-scroll-trigger"><Link to="/Workout">Workout</Link></a>
          </li>
      <Link className="navbar-brand" to="/myprofile">My Profile</Link>{" "}
      <Link onClick={()=>  this.logout()} className="navbar-brand" to="/">Logout</Link>{" "}
      </>
  )

  const loggedInRoutes = (
     <>
      <Route path="/myprofile" component={Myprofile} />
      <Route exact path="/Workout" component={Workout} />
      </>
  
      
  )

  const loggedOutLinks = (
   
      <>
      <Link className="navbar-brand" to="/signin">Sign In</Link>{" "}
      <Link className="navbar-brand" to="/signup">Sign Up</Link>{" "}
      </>
  )

  const loggedOutRoutes = (
      <>
      <Route path="/signin" component={() => <Signin loginStatus={this.loginStatus}/>} />
      <Route path="/signup" component={Signup}/>
      </>
  )

    return (

      <Router>
<nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger"><Link to="/">GetFit</Link></a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto my-2 my-lg-0">

          <li className="nav-item">
        <a className="nav-link js-scroll-trigger"><Link to="/Diet">Diet</Link></a>
          </li>

          <li className="nav-item">
        <a className="nav-link js-scroll-trigger"><Link to="/Product">Product</Link></a>
          </li>

          {/* <li className="nav-item">
        <a className="nav-link js-scroll-trigger"><Link to="/Workout">Workout</Link></a>
          </li> */}

          <li className="nav-item">
        <a className="nav-link js-scroll-trigger"><Link to="/MacroCalculator">Macro Calculator</Link></a>
          </li>

          {this.state.isLoggedIn ? loggedInLinks : loggedOutLinks }
        </ul>
        
      </div>
    </div>
  </nav>

  <Route exact path="/" component={Home} />
  <Route exact path="/Diet" component={Diet} />
  <Route exact path="/MacroCalculator" component={Macro} />
  <Route exact path="/Product" component={Product} />
  <Route path="/Workout/edit/:id" render={(props) => <Edit {...props}/>} />

  {this.state.isLoggedIn ? loggedInRoutes: loggedOutRoutes}
  </Router>
   )}}

export default Header;