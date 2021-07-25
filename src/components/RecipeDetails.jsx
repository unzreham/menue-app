import {React,  useState, useEffect } from 'react';
import axios from 'axios';
import Storage from './Storage';

function RecipeDetails(props) {

  const [recipe, setRecipe] = useState({});
  const [ingredient, setngredient] = useState([]);
  const [calories, setCalories] = useState(0);
  const [mealType, setMealType] = useState("")
  const [type, settype]  = useState("lunch")     

  // const [recipes, setRecipes] = useState([]);

useEffect(() => {
  getAlllrecipes();

}, [ ]);

async function getAlllrecipes () {
  const AppId = "425e5776";
  const AppKey = "d2e0f595afefbf088189b8edc16a5ca9";
 await axios
    .get(`https://api.edamam.com/search?q=${props.type}&app_id=${AppId}&app_key=${AppKey}`)
    .then((res) => {
      console.log(res.data.hits);
      // setRecipes(res.data.hits)
      setRecipe(res.data.hits[props.i].recipe)
     setngredient(res.data.hits[props.i].recipe.ingredientLines)
     setCalories(res.data.hits[props.i].recipe.calories)
     setMealType(res.data.hits[props.i].recipe.mealType)
     setRecipe(res.data.hits[props.i].recipe)
     console.log("here the ing", ingredient );


    })
    .catch((err) => console.error(err));
}

function handelAdd(){

  // const meal = {type: recipe }
  localStorage.setItem(type, JSON.stringify(recipe))
  const result = localStorage.getItem(type)
     console.log( JSON.parse(result))

}



    return (
        <div>

<h1   >{recipe.label}</h1>        

  <div class="card cardTwo" style={{width: "800px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src= {recipe.image}
        alt="..."
        class="img-fluid"
        style={{height: "396px"}}
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={{color: "white"}}> {recipe.label}</h5>
        <div class="card-text">

        <ul class="list-group">
        {ingredient.map((name, index) => (
        <li class="list-group-item" key={ index }>{name}      </li> 
        ))}
     <li class="list-group-item" > Clories: {calories}     </li> 
     <li class="list-group-item" > Meal Type: {mealType}     </li> 
    </ul>
        </div>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
  <br />
  <div class="row g-0">
  <div class="col-md-4">
</div>
<div class="col-md-4">

  <select required className="form-control"  value={type} onChange={e =>settype(e.target.value)}  >
                        {/* <option value="" className="hidden" selected="" disabled=""> category </option>    */}
                                <option  value= "breakfast">breakfast </option>
                                <option  value= "lunch"> lunch </option>
                                <option  value= "dinner"> dinner</option>  
                        </select> 
  </div>

  <div class="col-md-3">
 
  <button type="button" class="btn btn-warning" onClick ={handelAdd}> Add to the menue</button>
     
                        
                        
                         </div>



  </div>
  <br />

</div>
        </div>
    );
};

export default RecipeDetails;




