var container = document.getElementById('container')
var xhr = new XMLHttpRequest
xhr.onreadystatechange =function() {
    if(xhr.status===200 && xhr.readyState ===4){
        var jsonData = xhr.responseText
        var data = JSON.parse(jsonData)
        pokemonArr(data.objects[0].pokemon)
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon",true)
xhr.send()


function pokemonArr(data){
    console.log(data)
    for(var i = 0; i < data.length; i++){
       console.log(data[i].name)
       var pokemonName = document.createElement("p")
        pokemonName.textContent = data[i].name
        container.appendChild(pokemonName)
    }
}
