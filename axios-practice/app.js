var axios = require("axios");
var lukeSkywalker = axios.get('https://swapi.co/api/people/1');
console.log(lukeSkywalker);
function assignResponseToVariable(response){
    console.log(response.data)
}
axios.post('https://api.vschool.io/[your name]/todo/').then(function(response){
    console.log(response.data);
}).catch(function(error){
    console.log(error)
});


