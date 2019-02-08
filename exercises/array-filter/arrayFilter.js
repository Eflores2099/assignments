// Use the built-in array method .filter() to solve all of these problems

// Feel free to copy and paste the function and tests in this assignment.

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// function fiveAndGreaterOnly(arr) {
  
//    return arr.filter(function(num){
//       if( num > 5){
//           return num
//       }
//   })
// }
//   // test
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// 2) Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    return arr.filter(function(num){
        if (num ){
            return num
        }
    }
  })
  // test
  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]