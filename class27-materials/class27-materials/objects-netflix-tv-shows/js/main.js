//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class Netflix{
    constructor(genre,length,login, type){
        this.genre=genre
        this.length=length
        this.login=login
        this.type=type
    }
user(){
    console.log("HEY PARASITE")
}
details(){
    console.log("Give me name?")
}
access(){
    console.log(`kindly ${login}`)
}

}

let Cavill= new Netflix("romance","124 minute", "password****", "free")
Netflix.prototype.fun=false