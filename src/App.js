import React ,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }
componentDidMount(){
    let that = this
    axios.get('/users/check_for_user',{
    })
    .then(function(response){
      if(response.data.email){
        that.setState({
          currentUser: response.data.email
        })
      } else {
        that.setState({
          currentUser: null
        })
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }
updateCurrentUser(email) {
    this.setState({
      currentUser: email
    })
  }


  render(){

  return (
    <div>
    <Header updateCurrentUser={this.updateCurrentUser}></Header>

    <Footer></Footer>
    </div>

            
  )}
}  
        
export default App;
