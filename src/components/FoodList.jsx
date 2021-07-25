import {React,useState }from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import Storage from './Storage';
const FoodList = () => {

    const [searchKey  , setSearchKey] = useState();
    const [storage  , setStorage] = useState();

    const [ recipes, setRecipes] = useState ([]);
   // const [calories, setCalories] = useState(2000);
      const AppId = "425e5776";
      const AppKey = "d2e0f595afefbf088189b8edc16a5ca9";
       


   

    const handleSeach = (e) => {
        e.preventDefault();
        console.log("submit")
       axios.get(`https://api.edamam.com/search?q=${searchKey}&app_id=${AppId}&app_key=${AppKey}`).
       then( (res) => { 
           setRecipes(res.data.hits)
           console.log(res.data);}
           ).
       catch((err) => { console.log(err.data);})
    }

    return (
        <div className="cardContainer">


<div class="container">
  <div class="row">
    <div class="col align-self-start">
    </div>
    <div class="col align-self-center">
    <h1> Recipes Search </h1>    </div>
    <div class="col align-self-end">
    </div>
  </div>
</div>


<div class="container">
  <div class="row align-items-start">
 
  </div>
  <div class="row align-items-center">
    <div class="col">
    </div>
    <div class="col">
    <div class="input-group">
  
  <input type="text" class="form-control "  onChange = { (e) => setSearchKey(e.target.value) } />
  <div class="input-group-append">
    <button type="button" class="btn btn-outline-warning" onClick = {handleSeach}>Search</button>

  </div>
</div>    </div>
    <div class="col">
    </div>
  </div>
  </div>
 
  {recipes.map((m,i)=>{
    return(
<div class="card cardOne">
<div class="card-header">{m.recipe.label}</div>
  <img src= {m.recipe.image}  alt="" style={{width: "290px", height:"300px" }} /> 
  <div class="card-body">
    <p> cuisine Type: {m.recipe.cuisineType}</p>
    <p> Dish Type {m.recipe.dishType}</p>
  </div>
  <Link to={`/recipedetails/${i}/${searchKey}`}      className="btn btn-warning"   >Disply   </Link>
</div> 
    )
})
}

        </div>
    );
};

export default FoodList;