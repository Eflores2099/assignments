// var helloString =generateHello(){
//     var a = "hello"
//     return a
// }

// var generateGoodbye = function(){
//     var b= "goodbye"
//     return b
// }


// function  addition(a,b){
//   var sum = a+b
//   return sum
// }

// console.log(addition(4,5))

// var sayGoodbye = function(){

// }

// DOM- document object model
// document.theobjectyouwant
//  -interacting (selecting DOM custom Elements, editing, adding)

var display = document.getElementById("container")
var title = document.createElement("h1")
//  the alternative to the next line, you could use innerHTML
display.innerHTML= <h1 "hello world"><h1></h1>
title.rextContent = "hello world"
// the next line is to create a background color from js.
title.style.backgroundColor= "purple"
display.appendChild(title)

