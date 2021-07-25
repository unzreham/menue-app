import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import FoodList from './components/FoodList';
import Food from './components/Food';
import { Router, Link, navigate } from '@reach/router';
import RecipeDetails from './components/RecipeDetails';
import Menue from './components/Menue';
import Navbar from './components/Navbar/Navbar';
class App extends Component {

  constructor(){
  super()

  this.state = {
    disabled :"none",
  }
  }

responseGoogle = (response) => {
  console.log("reham success");

    console.log(response);
    this.setState({ disabled: "painted" })
  }

  responseGoogle2 = (response) => {
    console.log("reham failure");

    console.log(response);
  }
  render() {
    return (
      <div>
 {/* <nav class="navbar navbar-expand-md navbar-dark " style={{pointerEvents: this.state.disabled }} >

  <div class="navbar-collapse collapse" id="navbar4">
      <ul class="navbar-nav">
       
          <li className="nav-item"><Link className ="nav-link pr-3 nav-item-home disabled-link" to="/">Home </Link></li>
          <li className="nav-item"><Link className ="nav-link pr-3 nav-item-home" to="/menue">My menue </Link></li>
          <li className="nav-item"><Link className ="nav-link pr-3 nav-item-home" to="/search">Search </Link></li>


      </ul>
  </div>
</nav> */}
<Navbar />

        
        {/* <FoodList /> */}
        {/* <Food /> */}

  <GoogleLogin
  clientId="398296389829-ukici9lqlsjfu4soj6rl44fblhln277n.apps.googleusercontent.com"
  onSuccess={this.responseGoogle}
  onFailure={this.responseGoogle2}
    cookiePolicy={'single_host_origin'}
  isSignedIn={true}

/>



<Router>
<FoodList   path ="search" />
<RecipeDetails path ="recipedetails/:i/:type" />
<Menue path ="/menue" />

</Router>
      </div>
    );
  }
}

export default App;