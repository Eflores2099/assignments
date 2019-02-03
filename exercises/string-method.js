// Make a functions that will return any given string into all caps followed by the same string all lowercase.

// capilizeAndLowercase("Hello") // => "HELLOhello"

//  function capilizeAndLowercase (str){

//     return (str.toUpperCase()+str.toLowerCase())
// }
    
// console.log(capilizeAndLowercase("goodbye"))




// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

// function findMiddleIndex (str){
    
//     return (Math.floor(str.length /2))
// }
// console.log(findMiddleIndex("mississippi"))


// Make a function that uses slice() and your other functions you've written to return the first half of the string

// function returnFirstHalf (str){
//     return str.slice(0, str.length/2)
// }
// console.log(returnFirstHalf("hello world"))

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.
//  function capitalizedAndLowercase (str){
    
//     if(str.length %2 ===0){
//         console.log(str.slice(0,str.length / 2).toUpperCase())
//         console.log(str.slice(str.length /2, str.length).toLowerCase());
//     }else{
//         console.log(str.slice(0, Math.floor(str.length / 2)).toUpperCase())
//         console.log(str.slice(str.length /2, str.length).toLowerCase());

//     }
// }
// capitalizedAndLowercase("mississippi")


// Optional Code Challenge (This one is a step up in difficulty):

// Make a function that takes any string and capitalizes any character that follows a space.

// function capitalize(str){
//     var splitWords = str.split('');
//     for( var i =0); i <splitWords.length; i++){
//         splitWords[i] = splitWords[i].charAt(0).toUpperCase( + splitWords[i]).slice(1);
        
//     }return splitWords.joint("")
// }
// console.log(capitalize(" Hey friends! practice, practice, practice!"))