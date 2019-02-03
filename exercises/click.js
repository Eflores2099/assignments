// make the box disapear when the user clicks it

var redbox = document.getElementById("redbox")
redbox.addEventListener("click", function disapear(){
    document.getElementById('redbox').style.visibility = "hidden";
})