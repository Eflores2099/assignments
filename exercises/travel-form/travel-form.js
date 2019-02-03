// create the element


var form = document.getElementById("form1")
form.addEventListener("submit", function (e) {

    e.preventDefault()
    // add content to the elemnt
    var firstName = form.firstName.value
    var lastName = form.lastName.value
    var age = form.age.value
    var gender = form.gender.value
    var cities = form.cities.value
    var dietOptions = form.dietOptions
    var result = []
    for (var i = 0; i < dietOptions.length; i++) {
        if (dietOptions[i].checked) {
            result.push(dietOptions[i].value)
        }
    }

    console.log(result)
    console.log(dietOptions)
    //  the following lines are to clear the inputs when the user clicks submit.
    form.firstName.value = ""
    form.lastName.value = ""
    form.age.value = ""
    form.gender.value = ""
    form.cities.value = ""
    form.dietOptions.value = ""


    alert("Name: " + firstName + "\nLast Name: " + lastName + "\nAge " + age + "\nGender " + gender + "\nDestination " + cities + "\nDiet Options " + result)
}
)