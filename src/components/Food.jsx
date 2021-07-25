import React, { Component } from 'react';
import axios from 'axios';

class Food extends Component {

    constructor(){
        super()
        this.state ={
            recipes : [],
            searchKey : "",
        

          }
    }

 



    render() {
        const AppId = "425e5776";
        const AppKey = "d2e0f595afefbf088189b8edc16a5ca9";
        const handleSeach = (e) => {
            e.preventDefault();
            console.log(this.state.searchKey)
           axios.get(`https://api.edamam.com/search?q=${this.state.searchKey}&app_id=${AppId}&app_key=${AppKey}`).
           then( (res) => { 
            this.setState({recipes: res.data.hits}); 
              // setRecipes(res.data.hits)
               console.log(res.data);}
               ).
           catch((err) => { console.log(err.data);})
           }

        return (
            <>




<div class="container">
  <div class="row align-items-start">
    {/* <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div> */}
  </div>
  <div class="row align-items-center">
    <div class="col">
    </div>
    <div class="col">
    <div class="input-group">
    
  <input type="text" class="form-control "  onChange={(e) =>this.setState({ searchKey: e.target.value })}  />
  <div class="input-group-append">
    {/* <span class="input-group-text">Right addon</span> */}
    <button type="button" class="btn btn-outline-warning" onClick = {handleSeach}>Search</button>

  </div>
</div>    </div>
    <div class="col">
    </div>
  </div>
  </div>
 

  {/* <div class="row "> */}

  {this.state.recipes.map((m,i)=>{
  return(
<div class="card">
<div class="card-header">{m.recipe.label}</div>

 
  <img src= {m.recipe.image}  alt="" style={{width: "300px", height:"300px" }} /> 
 
  <div class="card-body">
    {/* <p style ={{    width: "258px" }}  className = "text-light" >{m.recipe.uri}</p> */}
    <p> cuisine Type: {m.recipe.cuisineType}</p>
    <p> Dish Type {m.recipe.dishType}</p>

  </div>
  <button type="button" class="btn btn-warning" >Watch</button>

</div>  
 
  )
})
}

        </>
        );
    }
}

export default Food;