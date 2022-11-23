//Create a pizza object that has four properties and three methods
//without constructor
let Pizza={}
Pizza.brand="Dominos"
Pizza.flavour=" chicken bbq"
Pizza.crust="thin"
Pizza.size="chairman"
Pizza.topping=function(){
    console.log(`pineapples and ${Pizza.flavour}`)
}
Pizza.time=function(){
    console.log('25 minutes max')
}
Pizza.tasty=function(){
    console.log(True)
}
