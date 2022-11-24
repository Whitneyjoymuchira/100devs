//Create a constructor with 4 properties and 3 methods
// function Pizza(crust,flavour,brand,size){
//     this.crust=crust
//     this.flavour=flavour
//     this.brand=brand
//     this.size=size

    // this.toppings=function(){
    //     console.log(`Pineapple ${flavour}`)
    // }
    // this.DeliveryTime=function(){
    //     console.log("DELIVERY TIME VARIES!!")
    // }
    // this.sauce=function(){
    //     console.log("Make it thick!!")
    // }
// }

class Pizza{
    constructor(crust,flavour,brand,size){
        this.crust=crust
        this.flavour=flavour
        this.brand=brand
        this.size=size
    }
   //inefficient
    toppings(){
        console.log(`Pineapple ${flavour}`)
    }
    DeliveryTime(){
        console.log("DELIVERY TIME VARIES!!")
    }


}
let BestPizza=new Pizza("Thick", "BBQ Chicken", "Dominos", "Chairman")
//efficient prototyping
Pizza.prototype.cheese=true
Pizza.prototype.sauce=function(){
    console.log("Make it thick!!")
}