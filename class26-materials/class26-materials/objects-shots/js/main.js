//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)
let Name=document.querySelector('h2')
let instructions=document.querySelector('h3')
let img=document.querySelector('img')

function getDrink()
{
  let drink=  document.querySelector('input').value


 fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
.then(res=> res.json())
.then(data=>{
Name.innerText=data.drinks.strDrink
instructions.innerText=data.drinks[2].strInstructions
img.src=data.drinks[2].strDrinkThumb
})
.catch(err =>{
console.log(`error ${err}`)
})
}

