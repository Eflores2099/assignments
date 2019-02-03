// Write a for loop that prints to the console the numbers 0 through 9.

// for(i = 0; i < 10; i++){
//     console.log(i)
// }

// Write a for loop that prints to the console 9 through 0.

// for (i = 9; i > - 1; i-- 1)
//     console.log(i)

// Write a for loop that prints these fruits to the console.
// 
//var fruit = ["banana", "orange", "apple", "kiwi"]

   //for(i = 0; i < fruit.length; i++){
   //     console.log(fruit)
   // }

// i = i - 1
// i -= 1
// i--


//    Bronze Medal
// Write a for loop that will push the numbers 0 through 9 to an array.
// let numArray = []
// for (var i = 0; i <= 9; i++){
//    numArray.push(i)
// }
// console.log(numArray)


// Write a for loop that prints to the console only even numbers 0 through 100.


// for(var  i = 0; i <= 100; i++){
//   if( i % 2 === 0){
// console.log(i)
//       }
//    }


// Write a for loop that will push every other fruit to an array.

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var newArray = [];
// for( var i = 0; i < fruit.length; i++){
// if(i % 2 === 0){
//    newArray.push(fruit[i])
//  }
// }
// console.log(newArray)

//Silver Medal
//Write a loop that will print out all the names of the people of the people array
// var peopleArray = [
//    {
//      name: "Harrison Ford",
//      occupation: "Actor"
//    },
//    {
//      name: "Justin Bieber",
//      occupation: "Singer"
//    },
//    {
//      name: "Vladimir Putin",
//      occupation: "Politician"
//    },
//    {
//      name: "Oprah",
//      occupation: "Entertainer"
//    }
//  ]
//  for(i = 0; i < peopleArray.length; i++){
// console.log(peopleArray[i].name)
//  }

//Write a loop that pushes the names into a names array, and the occupations into an occupations array.

// var peopleArray = [
//    {
//      name: "Harrison Ford",
//      occupation: "Actor"
//    },
//    {
//      name: "Justin Bieber",
//      occupation: "Singer"
//    },
//    {
//      name: "Vladimir Putin",
//      occupation: "Politician"
//    },
//    {
//      name: "Oprah",
//      occupation: "Entertainer"
//    }
//  ]
//  let nameArr = [];
//  let occupArr = [];

//  for(i = 0; i < peopleArray.length; i++){
//    nameArr.push(peopleArray[i].name)
//    occupArr.push(peopleArray[i].occupation)

//    }
// console.log(nameArr)
// console.log(occupArr)



//Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".

// var peopleArray = [
//    {
//      name: "Harrison Ford",
//      occupation: "Actor"
//    },
//    {
//      name: "Justin Bieber",
//      occupation: "Singer"
//    },
//    {
//      name: "Vladimir Putin",
//      occupation: "Politician"
//    },
//    {
//      name: "Oprah",
//      occupation: "Entertainer"
//    }
//  ]
//   let newOccup = []
//   let newName = []
//  for(i = 0; i < peopleArray.length; i++){
//    // newName.push(peopleArray[i].name)
//    // newOccup.push(peopleArray[i].occupation)
//    if(i % 2 ===0){
//           newOccup.push(peopleArray[i+1].occupation)
//           newName.push(peopleArray[i].name)
//         }
//  }
//  console.log(newName)
//  console.log(newOccup)


// Gold Medal
// Create an array that mimics a grid like the following using for loops:

// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]

// let newArr = [[0,0,0]]
//    for(i = 0; i < 2; i++){
//    newArr.push(newArr[i])
// }
// console.log(newArr)

// 2.Create an array that mimics a grid like the following using for loops:
let index = 0;
let array = []

for(i = 0; i < 3; i++){
   let subArray = [];
   array.push(subArray)
   for (j = 0; j < 3; j++){
      }subArray.push(index);
      index++;
   }
console.log(array)