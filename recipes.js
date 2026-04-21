window.onload = () => {

let url = "https://dummyjson.com/recipes"

let card = document.getElementsByClassName("cards")[0]

let dinner = document.getElementById("dinner")
let lunch = document.getElementById("lunch")
let desert = document.getElementById("desert")
let side = document.getElementById("SideDish")
let apetizer = document.getElementById("Apetizer")
let snacks = document.getElementById("Snacks")
let beverage = document.getElementById("Beverges")

let inp = document.getElementById("inp")
let search = document.getElementById("search")

let recipes = []


fetch(url)
.then((d) => d.json())
.then((d1) => {
    recipes = d1.recipes
    card.innerHTML=`<h1>Your Menu getting Ready............. </h1>` 
})


function showmeal(type){
    card.innerHTML = ""

    recipes.forEach((data)=>{
        if(data.mealType.includes(type)){
            card.innerHTML += `
            <div style="width:30%; border:2px solid black; border-radius:20px; padding:10px; background-color:rgb(190,107,205)">
                <h2 style="text-align:center">${data.name}</h2>
                <img style="height:200px;width:200px;display:block;margin:auto;border:2px solid purple;border-radius:20px;" 
                src="${data.image}" />
                <h3>Ingredients:</h3>
                <p>${data.ingredients.join(", ")}</p>
                <h3>Instructions:</h3>
                <p>${data.instructions}</p>
                <h3>Meal Type:</h3>
                <p>${data.mealType}</p>
                <h3>Time:</h3>
                <p>${data.cookTimeMinutes} mins</p>
            </div>
            `;
        }
    })
}


search.addEventListener("click",()=>{
    if (inp.value==""||!(isNaN(inp.value))){
        card.innerHTML=`<h1>Not a Proper way to write the input </h1>`
    }
    let value = inp.value.toLowerCase().trim()

    if(value.includes("dinner")) showmeal("Dinner")
    else if(value.includes("lunch")) showmeal("Lunch")
    else if(value.includes("dessert")) showmeal("Dessert")
    else if(value.includes("snack")) showmeal("Snack")
    else if(value.includes("beverage")) showmeal("Beverage")
    else if(value.includes("appetizer")) showmeal("Appetizer")
    else if(value.includes("side")) showmeal("Side Dish")
})


dinner.addEventListener("click",()=>{showmeal("Dinner")})
lunch.addEventListener("click",()=>{showmeal("Lunch")})
desert.addEventListener("click",()=>{showmeal("Dessert")})
side.addEventListener("click",()=>{showmeal("Side Dish")})
apetizer.addEventListener("click",()=>{showmeal("Appetizer")})
snacks.addEventListener("click",()=>{showmeal("Snack")})
beverage.addEventListener("click",()=>{showmeal("Beverage")})

}

// let url = "https://dummyjson.com/recipes"

// let card = document.getElementsByClassName("cards")[0]

// let dinner = document.getElementById("dinner")
// let lunch = document.getElementById("lunch")
// let desert = document.getElementById("desert")
// let side = document.getElementById("SideDish")
// let apetizer = document.getElementById("Apetizer")
// let snacks = document.getElementById("Snacks")
// let beverage = document.getElementById("Beverges")
// let recipes=[]
// fetch(url).then((d) =>{return d.json()}).then((d1)=>{
// recipes=d1.recipes
// console.log(recipes);
// })
// function showmeal(type){
//     card.innerHTML=""
//     recipes.forEach((data)=>{if( data.mealType.includes(type)){
//  card.innerHTML+=`
//                 <div style="width:30%; border:2px solid black; border-radius:20px; padding:10px; background-color:rgb(190,107,205)">
                    
//                     <h2 style="text-align:center">${data.name}</h2>

//                     <img style="height:200px;width:200px;display:block;margin:auto;border:2px solid purple;border-radius:20px;" 
//                     src="${data.image}" />

//                     <h3>Ingredients:</h3>
//                     <p>${data.ingredients.join(", ")}</p>

//                     <h3>Instructions:</h3>
//                     <p>${data.instructions}</p>

//                     <h3>Meal Type:</h3>
//                     <p>${data.mealType}</p>

//                     <h3>Time:</h3>
//                     <p>${data.cookTimeMinutes} mins</p>
//                 </div>
//                 `;
    
//     }
// })
       
// }

// let inp=document.getElementById("inp")
// let search=document.getElementById("search")
// search.addEventListener("click",()=>{
//     if (inp.value.includes("dinner")){
//     showmeal("Dinner")}
// })

// dinner.addEventListener("click",()=>{showmeal("Dinner")})
// lunch.addEventListener("click",()=>{showmeal("Lunch")})
// desert.addEventListener("click",()=>{showmeal("Dessert")})
// side.addEventListener("click",()=>{showmeal("SideDish")})
// apetizer.addEventListener("click",()=>{showmeal("Apetizer")})
// snacks.addEventListener("click",()=>{showmeal("Snacks")})
// beverage.addEventListener("click",()=>{showmeal("Beverage")})




// // id,name,ingredients,instructions,category
// // let url = "https://dummyjson.com/recipes"

// // let card = document.getElementsByClassName("cards")[0]

// // let dinner = document.getElementById("dinner")
// // let lunch = document.getElementById("lunch")
// // let desert = document.getElementById("desert")
// // let side = document.getElementById("SideDish")
// // let apetizer = document.getElementById("Apetizer")
// // let snacks = document.getElementById("Snacks")
// // let beverage = document.getElementById("Beverges")

// // fetch(url)
// //     .then((d) => d.json())
// //     .then((d) => {

// //         let da = d.recipes;

// //         // reusable function
// //         function showData(type) {

// //             card.innerHTML = ""; // clear old data

// //             let html = "";

// //             da.forEach((ele) => {

// //                 if (ele.mealType.some(m => m.toLowerCase() === type)) {

// //                     card.innerHTML += `
// //                 <div style="width:30%; border:2px solid black; border-radius:20px; padding:10px; background-color:rgb(190,107,205)">
                    
// //                     <h2 style="text-align:center">${ele.name}</h2>

// //                     <img style="height:200px;width:200px;display:block;margin:auto;border:2px solid purple;border-radius:20px;" 
// //                     src="${ele.image}" />

// //                     <h3>Ingredients:</h3>
// //                     <p>${ele.ingredients.join(", ")}</p>

// //                     <h3>Instructions:</h3>
// //                     <p>${ele.instructions}</p>

// //                     <h3>Meal Type:</h3>
// //                     <p>${ele.mealType}</p>

// //                     <h3>Time:</h3>
// //                     <p>${ele.cookTimeMinutes} mins</p>
// //                 </div>
// //                 `;
// //                 }

// //             });

// //             // card.innerHTML = html;
// //         }

// //         // event listeners
// //         dinner.addEventListener("click", () => showData("dinner"))
// //         lunch.addEventListener("click", () => showData("lunch"))
// //         desert.addEventListener("click", () => showData("dessert"))
// //         side.addEventListener("click", () => showData("side"))
// //         apetizer.addEventListener("click", () => showData("appetizer"))
// //         snacks.addEventListener("click", () => showData("snack"))
// //         beverage.addEventListener("click", () => showData("beverage"))

// //     });
// let url = "https://dummyjson.com/recipes"

// let card = document.getElementsByClassName("cards")[0]

// let dinner = document.getElementById("dinner")

// let recipes = []

// fetch(url)
//   .then((d) => d.json())
//   .then((d1) => {
//     recipes = d1.recipes
//     console.log(recipes);
//   })

// function showmeal(type){

//     card.innerHTML = ""; 

//     recipes.forEach((data) => {

//         if (data.mealType.includes(type)) {

//             card.innerHTML += `
//                 <div style="width:30%; border:2px solid black; border-radius:20px; padding:10px; background-color:rgb(190,107,205)">
                    
//                     <h2 style="text-align:center">${data.name}</h2>

//                     <img style="height:200px;width:200px;display:block;margin:auto;border:2px solid purple;border-radius:20px;" 
//                     src="${data.image}" />

//                     <h3>Ingredients:</h3>
//                     <p>${data.ingredients.join(", ")}</p>

//                     <h3>Instructions:</h3>
//                     <p>${data.instructions}</p>

//                     <h3>Meal Type:</h3>
//                     <p>${data.mealType}</p>

//                     <h3>Time:</h3>
//                     <p>${data.cookTimeMinutes} mins</p>
//                 </div>
//             `;
//         }
//     });
// }


// dinner.addEventListener("click", () => showmeal("Dinner"));