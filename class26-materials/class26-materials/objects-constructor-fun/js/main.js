//Create a constructor with 4 properties and 3 methods
function Pizza(crust,flavour,brand,size){
    this.crust=crust
    this.flavour=flavour
    this.brand=brand
    this.size=size

    this.toppings=function(){
        console.log(`Pineapple ${flavour}`)
    }
    this.DeliveryTime=function(){
        console.log("DELIVERY TIME VARIES!!")
    }
    this.sauce=function(){
        console.log("Make it thick!!")
    }
}
let BestPizza=new Pizza("Thick", "BBQ Chicken", "Dominos", "Chairman")
Pizza.prototype.cheese=true