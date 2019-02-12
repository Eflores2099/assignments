
var ask = require('readline-sync')

/////////////////////
// Global variables //
var player = {
    name: '',
    health: 100,
    inventory: []
}

var enemy = [
    {
        name: 'Monarch Henchman',
        health: 50,
        inventory: ["Dart Gun", "Xanax"]
    },
    {
        name: "The Monarch",
        health: 75,
        inventory: ["Monarch Suit", "Xanax"]
    },
    {
        name: "Baron Underbheit",
        health: 105,
        inventory: ["Underbheit's Lower Jaw", "Xanax"]
    },
    {
        name: "Henry Killinger",
        health: 95,
        inventory: ["Killinger's Umbrella", "Xanax"]
    },
    {
        name: "Molotov Cocktease",
        health: 120,
        inventory: ["Chastity Belt", "Xanax"]
    }]

var playerOption = ["Walk.", "Check Inventory"]



// /////////////////
// /// GAME INTRO //

player.name = ask.question("What is your name? ");
console.log("Welcome " + player.name + ", to The Venture Bros. Game")

////////////////////
// Game Functions //
function walk() {
    console.log("press 1 to walk.")
    var chance = Math.floor(Math.random() * 4)
    if (chance === Math.floor(Math.random() * 4)) {
        fight();
    } else {
        console.log("You have such and such in your bag and this many health points. push 1 to walk.")
    }

}
function run() {
    var chance = Math.floor(Math.random() * 2)
    if (chance === 1) {
        console.log("You ran away successfully, wuss!")
    } else {
        console.log("Double damn it! Play him some of your chin music!")
        attackEnemy()
    }
}

function enemyCreation(){
    var randomEnemy = Math.floor(Math.random() * enemy.length)
    return enemy[randomEnemy]
}

function fight() {
    console.log("Do you want to fight or run?")
    var newEnemy = enemyCreation()
    console.log(newEnemy)
    while (enemy.health > 0 && player.health > 0)
        if (playerOption === 3) {
            run()
        } else {
            attackEnemy()
        }
}
// function attackEnemy(){
//    var attackDamge = Math.floor(Math.random() * 4) 

// }



/////////////
// GAME LOOP
while (player.health > 0) {
    var playerChoice = ask.keyInSelect(playerOption, "What would you like to do?")
    if (playerChoice === 0) {
        console.log("You explored the compound")
        walk();
    }
}