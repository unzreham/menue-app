import {React,  useState, useEffect } from 'react';

function Menue(props) {


  const lunch = localStorage.getItem("lunch")
  const lunch2 = JSON.parse(lunch)

  const breakfast = localStorage.getItem("breakfast")
  const breakfast2 = JSON.parse(breakfast)

  const dinner = localStorage.getItem("dinner")
  const dinner2 = JSON.parse(dinner)

    const checkNull=(val)=> {
      if (val === null) {
     return 0
      }else{
        return JSON.parse(val).calories
      }
    }
    const lunchCal =   checkNull(lunch)
    const breakfastCal = checkNull(breakfast)
    const dinnercal = checkNull(dinner)
    console.log(lunchCal)
    console.log(breakfastCal)
    console.log(dinnercal)


    const total = breakfastCal + lunchCal +dinnercal;

    return (
        <div className = "cardContainer">
             <div className =" row align-items-start" >
             {breakfast2  != null &&
      

<div class="card cardOne">
<div class="card-header">Breakfast</div>
  <img src= {breakfast2.image}  alt="" style={{width: "290px", height:"300px" }} /> 
  <div class="card-body">
      <h5>{breakfast2.label}</h5>
    <p> cuisine Type: {breakfast2.cuisineType}</p>
    <p> Dish Type {breakfast2.dishType}</p>
    <p> calories {breakfast2.calories}</p>
  
</div>
</div>

      }

             {lunch2  != null &&
              <div class="card cardOne">
              <div class="card-header">Lunch</div>
                <img src= {lunch2.image}  alt="" style={{width: "290px", height:"300px" }} /> 
                <div class="card-body">
                    <h5>{lunch2.label}</h5>
                  <p> cuisine Type: {lunch2.cuisineType}</p>
                  <p> Dish Type {lunch2.dishType}</p>
                  <p> calories {lunch2.calories}</p>

                  </div>
                  </div>

                    }




{dinner2 != null &&
<div class="card cardOne">
<div class="card-header">Dinner</div>
  <img src= {dinner2.image}  alt="" style={{width: "290px", height:"300px" }} /> 
  <div class="card-body">
      <h5>{dinner2.label}</h5>
    <p> cuisine Type: {dinner2.cuisineType}</p>
    <p> Dish Type {dinner2.dishType}</p>
    <p> calories {dinner2.calories}</p>

  </div>
  
</div>

      }
        </div>
        <div className ="footer  row align-items-start">
          <h4 style = {{ color :"white"}}> The total  calories is {total} </h4>
        </div>
</div>

    );
}

export default Menue;


// function menue(props) {








//     return (
//         <div>
//             {Object.keys(lunch).length > 0 &&
//         <h2>
//           You have {lunch.label} unread messages.
//         </h2>
//       }
//         </div>
//     );
// }

// export default menue;