var ask = require("readline-sync");

var name = ask.question("What is you name?");

console.log ("Hello, and welcome to my game! "+ name);

var options = ["Put hand in hole", "Find the key", "Open the door"]
var gameOver = false
//  Build var for finding the key
var findKey = false
// game loop
while(!gameOver){
    
        var userChoice = ask.keyInSelect(options, 'What would like to do?')
        if(userChoice === 0){
            console.log ("you put your hand in the hole, and a bear ate you.")
            gameOver = true
        }else if(userChoice === 1){
            console.log ("You chose to find the key. Now open the door?")
            findKey = true 
        }else if( userChoice === 2){
            console.log("you need a key to open the door, dum dum.")
            if(findKey ===true){
                console.log(" You have escaped!!")
                gameOver=true
            }else if(findKey===false){
                console.log("you dont have a key,stupid. You can't leave.")
            }
        }else if( userChoice === -1){
            gameOver =true
        }
}