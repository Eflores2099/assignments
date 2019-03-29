const todosList = document.getElementById("container")
const todoForm = document['add-todo-form']
const axios = require("axios")

axios.get("https://api.vschool.io/erikf/todo").then (response => {
    
const todos = response.data
    listTodo(todos)

}).catch((err => )
    console.log(error)
)

function listTodos(todos){
    
    const firstTodo = todosArr[0]
    for(var i=0; i< todos.length; i++){
        const todoContainer = document.createElement('div')
        //  create elements, make i show on the DOM
        const title = document.createElement('h1')
        const imgurl = document.createElement('img')
        //  edit the element/ give it content
        todoContainer.classList.add("todo-container")
    title.textContent=todosArr[i].title
    imgurl.setAttribute('src', todosArr[i].imgUrl)
    if(todosArr[i].completed){
        title.style.textDecoration = 'line-through'
    }
    // append it to the DOM
    todosList.appendChild(title)
    todoContainer.appendChild(imgUrl)
    todoListContainer.appendChild(todoContainer)
    }
}

axios.post("https://api.vschool.io/erikf/todo", newTodo).then(response => {
    console.log(response.data)
}).catch((err => )
    console.log(error)
)

const newTodo = getElementbyId('newTodo').value;

    const todos= listTodos();
    todos.push(newTodo)
    




todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newTodo = {
        title:todoForm.title.value
    }


    todoForm.title.value = ""
    axios.post("https://api.vschool.io/erikf/todo", newTodo).then(response =>{
        todoListContainer.innerHTML =""
        getData()
    })
})
getData()