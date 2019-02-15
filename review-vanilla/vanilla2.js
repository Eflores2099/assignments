var xhr = new XMLHttpRequest
xhr.onreadystatechange =function() {
    if(xhr.status===200 && xhr.readyState ===4){
        var jsonData = xhr.responseText
        var data = json.parse(jsonData)
        console.log(data)
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon",true)
xhr.send()