var isNavBarShowing = false
var myNavBar = document.getElementById("myTopNav")
var myNavContainer = document.getElementsByClassName("nav-bar-container")[0];
var myButton = document.getElementsByClassName("menu-button")[0];
var closeButton = document.getElementById("close-button");


function toggleNavBar() {
    isNavBarShowing = true 
    myNavBar.className = "topnav-show"
    myButton.style.display = "none";
    myNavContainer.style.display = "block"
}

closeButton.addEventListener("click", function () {
    isNavBarShowing = false;
    myNavBar.className = "topnav-hidden"
    setTimeout(function () {
        myNavContainer.style.display = "none"
    }, 1001)
    myButton.style.display = "block";
}
)
