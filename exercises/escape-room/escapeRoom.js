var ask = require("readline-sync");

var name = ask.question("What is you name?");

console.log ("standard greeting phrase "+ name);

var options = ["Put hand in hole", "Find the key", "Open the door"]
var gameOver = false
//  Build var for finding the key
var findKey = 
// game loop
while(!gameOver){
    
    ask.keyInSelect(options, "what would you like to do?")
        if(userChoice === 0){
            console.log ("you put your hand in the hole, and a bear ate you.")
            gameOver = true
        }else if(userChoice === 1){
            console.log ("You chose to find the key. Now open the door?")
            gameOver = false
        }else if( userChoice === 2){
            console.log("you need a key to open the door.")
            gameOver = false
        }else ( userChoice == 2)
}