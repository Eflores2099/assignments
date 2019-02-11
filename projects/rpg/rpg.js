
var ask = require('readline-sync')

/////////////////////
// Global variables //
var player = {
    name: '',
    health: 100,
    inventory: []
}
var playerOption = ["w","a","r"]
var enemies =['Monarch Henchman', "The Monarch", " Phantom Limb", "Baron Underbheit","Henry Killinger, Molotov Cocktease"]
var options = ["Walk. Press W ", "Attack. Press A", "Run Away. Press R."]
var userChoice= ask.question("Do something," + player.name + "!")
var gameOver = false
////////////////////
// Game Functions //
function walk(){
    var chance = Math.floor(Math.random() * 4)
    if(playerOption ==="w")
        if(chance = Math.floor(Math.random() * 4)){
            fight();
        }else {
            // console.log( You have such and such in your bag and this many health points. push w to walk.)
        }
}
function run(){
    if(playerOption === "r"){
        var chance = Math.floor(Math.random()* 2)
        if(chance === 1){
            console.log("You successfuly ran away, wuss!")
        }
    }else{
        console.log("Double damn it! Play him some of your chin music!")
            attack()
    }
}
function fight(){
    console.log("Do you want to fight or run?")
    enemyCreation()
    if(playerOption === "r"){
        run()
    }else{
        attackEnemy()
    }
}






// /////////////////
// /// GAME INTRO //

player.name = ask.question("What is your name? ");
console.log("Welcome " + player.name + ", to The Venture Bros. Game")


/////////////
// GAME LOOP
while(player.health > 0){
    walk();
}