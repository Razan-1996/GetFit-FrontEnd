import React, {Component} from 'react';
import Home from './Home';
import Diet from './Diet';
import Workout from './Workout';
import Product from './Product';
import Macro from '../MacroCalculator/components/Macro';
import axios from 'axios';
import Logout from './validation/Logout';
import SingUp from './validation/SingUp';
import SignIn from './validation/SignIn';
import Myprofile from '../Myprofile';

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
    axios.get("https://shielded-mesa-36213.herokuapp.com/api/logged_in", {headers:{ "Authorization": localStorage.getItem("token")}}).then(res => {
        this.setState({isLoggedIn: res.data})
    });
  }

  loginStatus = (logged_in) =>{
    this.setState({isLoggedIn: logged_in})
  }

  render () {

    const loggedInLinks = (
      <>
      {/* <Link className="navbar-brand" to="/add_menu_item">Add Menu Item</Link>{" "} */}
      <Link className="navbar-brand" to="/logout">Logout</Link>{" "}
      </>
  )

  const loggedInRoutes = (
      <>
      {/* <Route path="/add_menu_item" component={AddMenuItem} /> */}
      <Route path="/logout" component={() => <Logout loginStatus={this.loginStatus}/>} />
      </>
  )

  const loggedOutLinks = (
   
      <>
      <Link className="navbar-brand" to="/signin">SignIn</Link>{" "}
      <Link className="navbar-brand" to="/signup">SignUp</Link>{" "}
      </>
  )

  const loggedOutRoutes = (
      <>
      <Route path="/signin" component={() => <SignIn loginStatus={this.loginStatus}/>} />
      <Route path="/signup" component={SingUp} />
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

          <li className="nav-item">
        <a className="nav-link js-scroll-trigger"><Link to="/Workout">Workout</Link></a>
          </li>

          <li className="nav-item">
        <a className="nav-link js-scroll-trigger"><Link to="/MacroCalculator">Macro Calculator</Link></a>
          </li>

          <li className="nav-item">
        <a className="nav-link js-scroll-trigger"><Link to="/Myprofile">My profile</Link></a>
          </li>
          {this.state.isLoggedIn? loggedInLinks : loggedOutLinks }
        </ul>
        
      </div>
    </div>
  </nav>

  <Route exact path="/" component={Home} />
  <Route exact path="/Diet" component={Diet} />
  <Route exact path="/MacroCalculator" component={Macro} />
  <Route exact path="/Product" component={Product} />
  <Route exact path="/Workout" component={Workout} />
  <Route exact path="/Myprofile" component={Myprofile} />
  {this.state.isLoggedIn? loggedInRoutes: loggedOutRoutes}
  </Router>
   )}}

export default Header;