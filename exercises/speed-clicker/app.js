var display = document.getElementById("counter-display")
var button = document.getElementById("counter-button")
var clicks = JSON.parse(localStorage.getItem("clicks")) || 0
var counter = clicks
display.textContent = counter

button.addEventListener("click",function(){
    counter++
    display.textContent = counter

    localStorage.setItem("clicks",counter)

})

var intervalId= setInterval(function(){

})


