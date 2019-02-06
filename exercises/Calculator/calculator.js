var addition = document.addition
var subtraction = document.subtraction
var multiplication = document.multiplication

    addition.addEventListener("submit", function (e){
    
    e.preventDefault()
    var  numInput1 = addition.numInput1.valueAsNumber
    var  numInput2 = addition.numInput2.valueAsNumber
    var  sum = numInput1 + numInput2
        addition.numInput1.value = ""
        addition.numInput2.value = ""
        var h3 = document.createElement("h3")
        h3.textContent = sum
    addition.appendChild(addition)
})



    subtraction.addEventListener("submit", function (e){

    e.preventDefault()
    var  numInput1 = subtraction.numInput1.valueAsNumber
    var  numInput2 = subtraction.numInput2.valueAsNumber
    var  difference = numInput1 - numInput2
        subtraction.numInput1.value = ""
        subtraction.numInput2.value = ""
        var h3 = document.createElement("h3")
        h3.textContent = difference
        subtraction.appendChild(subtraction)
        
})


    multiplication.addEventListener("submit", function (e){

    e.preventDefault()
    var  numInput1 = multiplication.numInput1.value
    var  numInput2 = multiplication.numInput2.value
    var  product = numInput1 *numInput2

        multiplication.numInput1.value = ""
        multiplication.numInput2.value = ""
        var h3 = document.createElement("h3")
        h3.textContent = product
        multiplication.appendChild(multiplication)
})
