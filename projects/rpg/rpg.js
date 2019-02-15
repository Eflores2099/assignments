
var ask = require('readline-sync')

/////////////////////
// Global variables //
var player = {
    name: '',
    health: 100,
    inventory: [],
    attackDamage: 50
}

var enemy = [
    {
        name: 'Monarch Henchman',
        health: 50,
        inventory: ["Dart Gun", "Xanax"],
        attackDamge: 25,
    },
    {
        name: "The Monarch",
        health: 75,
        inventory: ["Monarch Suit", "Xanax"],
        attackDamage: 35,
    },
    {
        name: "Baron Underbheit",
        health: 105,
        inventory: ["Underbheit's Lower Jaw", "Xanax"],
        attackDamage: 40,
    },
    {
        name: "Henry Killinger",
        health: 95,
        inventory: ["Killinger's Umbrella", "Xanax"],
        attackDamage: 35,
    },
    {
        name: "Molotov Cocktease",
        health: 120,
        inventory: ["Chastity Belt", "Xanax"],
        attackDamage: 35,
    }]

var playerOption = ["Walk.", "Check Inventory"]

var attackOrRun = ["Attack", "Run"]

// /////////////////
// /// GAME INTRO //

player.name = ask.question("What is your name? ");
console.log("Welcome " + player.name + ", to The Venture Bros. Game")

////////////////////
// Game Functions //
function walk() {
    console.log("press 1 to walk.")
    var chance = Math.floor(Math.random() * 4)
    console.log(chance)
    if (chance === 2) {
        console.log("im running")
        fight();
    } else {
        console.log("You have such and such in your bag and this many health points.")
    }

}
function run() {
    var chance = Math.floor(Math.random() * 2)
    if (chance === 1) {
        console.log("You ran away successfully, wuss!")
    } else {
        console.log("Double damn it! Play him some of your chin music!")
        fight()
    }
}

function enemyCreation() {
    var randomEnemy = Math.floor(Math.random() * enemy.length)
    return enemy[randomEnemy]
}

function fight() {
    var newEnemy = enemyCreation()
    console.log(newEnemy)
    console.log("Do you want to fight or run?")
    var playerChoice = ask.keyInSelect(attackOrRun, "What would you like to do?")
    if (playerChoice === 0) {
        while (newEnemy.health > 0 && player.health > 0) {
            var newplayerChoice = ask.keyInSelect(attackOrRun, "What would you like to do?")
            if (newplayerChoice === 0) {
                console.log("attack")
                newEnemy.health -= player.attackDamage
                if (newEnemy.health <= 0) {
                    console.log("You killed the enemy and you are left standing covered in your enemy's blood with a raging erection! ")
                    // console.log("You recei ved" + enemy.inventory + ". Add" + player.health + 30)
                    const currentEnemy = enemy.findIndex(each => each.name === newEnemy.name)
                    enemy.splice(currentEnemy, 1);
                    return walk()
                } else {
                    player.health -= newEnemy.attackDamage
                }
                console.log(newEnemy.health)
                console.log(player.health)
            } else if (newplayerChoice === 1) {
                return run()
            }
        }
    }
    else{
        return run()
    }
}



/////////////
// GAME LOOP
while (player.health > 0) {
    var playerChoice = ask.keyInSelect(playerOption, "What would you like to do?")
    if (playerChoice === 0) {
        console.log("You explored the compound")
        walk();
    }
}