
var marioPage = document.marioPage
marioPage.addEventListener("submit",function (e){
    e.preventDefault()

    var numOfGoombas = marioPage.numOfGoombas.valueAsNumber
    var numOfBobOmbs= marioPage.numOfBobOmbs.valueAsNumber
    var numOfCheaps = marioPage.numOfCheaps.valueAsNumber
        var product1 = numOfGoombas * 5
        var product2 = numOfBobOmbs * 7
        var product3 = numOfCheaps * 11
        var totalCoins = product1 + product2 + product3
    
        marioPage.numOfGoombas.value = ""
        marioPage.numOfBobOmbs.value = ""
        marioPage.numOfCheaps.value = ""

        var h2 = document.createElement("h2")
        h2.textContent = totalCoins
       
        marioPage.appendChild(h2)    
})