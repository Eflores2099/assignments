const addForm = document['addForm']
const containerIncomplete = document.getElementById('containerIncomplete')
const addEditContainers = document.getElementsByClassName('add-edit-container')
const containerComplete = document.getElementById('containerComplete')
const cardContent = document.getElementById('card-content')
const viewContainers = document.getElementsByClassName('view-container')

function getData() {
axios.get("https://api.vschool.io/erikf/todo").then ((res) => {
    
    const todos = res.data
        listTodos(todos)
    }).catch((error) => {
    throw new Error(error)
    })
}
// list all todos
function listTodos(todos) {
    todos.reverse()
    
    for(let i = 0; i < todos.length; i++){

        // grab the current ID
        const id = todos[i]._id

        //  create elements, make items show on the DOM
        const card = document.createElement('div')
        const cardContent = document.createElement('div')
        const editForm = document.createElement('form')
        const editIcon = document.createElement('div')
        const image = document.createElement('a')
        const title = document.createElement('p')
        const description = document.createElement('h6')
        const deleteButton = document.createElement('button')
        const updateButton = document.createElement('button')
        

        //  edit the element/ give it content
        card.className= 'card'
        card.id = id
        editForm.name = "editform-" + id
        deleteButton.textContent = "delete"
        deleteButton.classList.add("waves-effect")
        deleteButton.classList.add("waves-light")
        deleteButton.classList.add("green")
        deleteButton.classList.add("secondary-content")
        deleteButton.classList.add("btn")

        updateButton.textContent= "Update"
        updateButton.classList.add("waves-effect")
        updateButton.classList.add("waves-light")
        updateButton.classList.add("blue")
        updateButton.classList.add("btn")

        card.addEventListener("click", formToggleVisibility)

        deleteButton.addEventListener("click", (e) => deleteTodo(e,id))
        updateButton.addEventListener("click", (e) => updateTodo(e,id))

        editIcon.innerHTML =` 
            <a class="waves-effect waves-light lighten-4 secondary-content btn-flat blue-text" onclick="formToggleVisibility('editContainer')"><i
                class="material-icons right">edit</i></a>`

        cardContent.classList = "view-container card-content"

        title.classList = 'card-title'

    
    if(todos[i].completed) {
        title.innerHTML = `<p class ='card-title'>
            <label>
                <input type ='checkbox' onclick= "toggleCompleted(this, '${id}')" checked/>
                <span class ='black-text'>${todos[i].title}</span>
            </label>
        </p>`
    } else {
        title.innerHTML = `<p class= "card-title">
            <label>
                <input type ="checkbox" onclick = "toggleCompleted(this, '${id}')"/>
                <span class ="black-text">${todos[i].title}</span>
            </label>
        </p>`
    }
        if (todos[i].drescription) {
            description.textContent = todos[i].description 
            description.classList = 'grey-text'        
    }

        if (todos[i].imgUrl) {
            image.setAttribute("href", todos[i].imgUrl)
            image.setAttribute("target", "_blank")
            image.style = "margin-bottom: 20pt; margin-top: -20pt; display: block;"
            image.innerHTML = `<i class="material-icons right">image</i>`
    }




    // Edit Forms 

        const editFormContainer = document.createElement('div')
            editFormContainer.classList = "card-content toggle-content add-edit-container"
            editFormContainer.id = 'add-edit-' + card.id
            editFormContainer.innerHTML = `

            <p>
                <input value="${todos[i].title || ''}" placeholder= 'Title' id= "title" type= "text" class= "validate" required/>
                <label for ="title" class="hide-me">Title></label>
            </p>

            <p>
                <input value="${todos[i].description || ''}" placeholder="Notes" id="description" type="text" class="validate" />
                <label for="description" class="hide-me">Notes</label>
            </p>

            <p>
                <input value="${todos[i].imgUrl || ''}" placeholder="Image URL" id="imgUrl" type="url" class="validate" />
                <label for="imgUrl" class="hide-me">Image URL</label>
            </p>`


        card.appendChild(editIcon)
        card.appendChild(editForm)
        cardContent.appendChild(title)
        card.appendChild(deleteButton)
        card.appendChild(updateButton)
        


        if (todos[i].description) cardContent.appendChild(description)

        if(todos[i].imgUrl) cardContent.appendChild(image)
// this adds cardContent to main container

        editForm.appendChild(cardContent)
        editForm.appendChild(editFormContainer)

        if (todos[i].completed) {
            containerComplete.appendChild(card)
        } else {
            containerIncomplete.appendChild(card)
        }

    }
}

// form event listener for doing POST request to API
addForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // newTodo objet
    const newTodo = {
        title:addForm.title.value,
        desription:addForm.description.value,
        img: addForm.imgUrl.value,
        completed:false
    }

    // reset the form value to be empty
    addForm.title.value = ""
    addForm.description.value = ""
    addForm.imgUrl.value = ""



        // Post Data
    axios.post("https://api.vschool.io/erikf/todo", newTodo).then(res => {
        getData()
        window.location.reload(true)

    }).catch((error) => {
        throw new Error(error)
    })

})

// function for submitting a PUT request to the API
    function updateTodo(e,id) {
        e.stopPropagation()
        const formName = "editform-" + id
        const editForm = document[formName]

// generate updated todo object
        const updateTodo = {
            title:editForm.title.value,
            description:editForm.description.value,
            imgUrl: editForm.imgUrl.value,
            
        }

    
// if the required title has been filled in
        if (editForm.title.value) {
            // PUT the data
            axios.put("https://api.vschool.io/erikf/todo" + "/" + id, updateTodo).then (res => {
                getData()
                window.location.reload(true);

            }).catch((error) => {
                throw new Error(error)
            })
        }
    }
// Function for updating the completion of a todo

function toggleCompleted(element, id) {

    let updateTodo

    if (element.checked) {
        updateTodo = {
            completed:true
        }
    } else {
        updateTodo = {
            completed:false
        }
    }

    axios.put("https://api.vschool.io/erikf/todo" + "/" + id, updateTodo).then(res => {
        getData()
        window.location.reload(true)

    }).catch((error) => {
        throw new Error(error)
    })


}

    // Function for deleting selected todos

    function deleteTodo(e,id) {
        e.stopPropagation()
        axios.delete("https://api.vschool.io/erikf/todo" + "/" + id).then(res => {
            getData()
            window.location.reload(true)

        }).catch((error) => {
            throw new Error(error)
        })
        
    }

    // Toggle visibility of Add & Edit Forms
    // show Form- pass it the ID of the div you are showing/hiding

    function formToggleVisibility(hardId) {
        let id
        let cardContentById

        if (hardId === "editContainer" || hardId === "addContainer") {
            // grab the selected div by its hardcoded ID
            id = hardId
            cardContentById = document.getElementById('add-edit-' + hardId)

        } else {
            // grab the selected div by its DB ID
            id = this.id
            cardContentById = document.getElementById("add-edit-" + id)
        }

        // toggle visibility of add div

        // if container is visible, hide it by ID and all divs by class
        if (cardContentById.style.display === "block") {

        // initialize all add and edit containers to hidden
        for (let i = 0; i < addEditContainers.length; i++) {
            addEditContainers[i].style.display = "none"
            addEditContainers[i].style.height = 0

        }

        // show the selected form
            cardContentById.style.display = "none"
            cardContentById.style.height= 0

    //block is invisible? show it by ID and hide all other divs by class 
    } else {

        // initialize all add and edit containers to hidden
        for (let i = 0; i < addEditContainers.length; i++) {
            addEditContainers[i].style.display = "none"
            addEditContainers[i].style.height = 0
        }

        // show selected div by its ID
            cardContentById.style.display = "block"
            cardContentById.style.height = "auto"

    }

    document.getElementById('add-edit-' + id).addEventListener('click', function (event) {
        event.stopPropagation();
    });

}  

// RUN THE APP
getData()

