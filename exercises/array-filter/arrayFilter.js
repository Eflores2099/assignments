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
// function evensOnly(arr) {
//     return arr.filter(function(num){
//         if (num %2 ===0){
//             return num
//         }
//     })
//   }
//   // test
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]


// 3) Given an array of strings, return a new array that only includes those that are  characters or fewer in length

// function fiveCharactersOrFewerOnly(arr) {
//     return arr.filter(function(arr){
//         if(arr.length <= 5){
//             return arr
//         }
//     })
//   }
//   // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// function peopleWhoBelongToTheIlluminati(arr){
//     return arr.filter(function(person){
//         if(person.member){
//             return person
//         }
//     })
//   }
//   // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       {
//           name: "Angelina Jolie",
//           member: true
//       },
//       {
//           name: "Eric Jones",
//           member: false
//       },
//       {
//           name: "Paris Hilton",
//           member: true
//       },
//       {
//           name: "Kayne West",
//           member: false
//       },
//       {
//           name: "Bob Ziroll",
//           member: true
//       }
//   ]));


// 5) Filter out all the people who are not old enough to see The Matrix (younger than 18)

// function ofAge(arr){
//     return arr.filter(function(person){
//         if(person.age < 18){
//             return person
//         }
//     })
//   }
//   // test
//   console.log(ofAge([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
  