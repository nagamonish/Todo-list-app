// Variables
let todoItems = []
const todoInput = document.querySelector('.todo-input')
const completedTodosDiv = document.querySelector('.completed-todos')
const uncompletedTodosDiv = document.querySelector('uncompleted-todos')


// Get todo list on first boot
window.onload = () => {
    let storageItems = localStorage.getItem('todoItems')

    if (storageItems !== null) {
        todoItems = JSON.parse(storageItems)
    }

    render()
}

// Get the content typed into the input 

todoInput.onkeyup = ((e) => {
    let value = e.target.value.replace(/^\s+/,"")
    if (value && e.keyCode === 13) {
        addTodo(value)

        todoInput.value = ''
        todoInput.focus()
    }
})

// Add todo
function addTodo(text){
    todoItems.push({
        id: Date.now(), 
        text,
        completed: false
    })

    saveAndRender()
}

// Remove todo 
function removeTodo(id){}

// Mark as completed
function markAsCompleted(id){}

// Mark as uncompleted
function markAsUnompleted(id){}

// Save in localstorage
function save(){
    localStorage.setItem('todoItems', JSON.stringify(todoItems))
}

// Render
function render(){
    let uncompleteTodos  = todoItems.filter(item => !item.completed)
    let completedTodos = todoItems.filter(item => item.completed)

    completedTodosDiv.innerHTML = ''
    uncompletedTodosDiv.innerHTML = ''

    if (uncompleteTodos.length > 0) {
       uncompleteTodos.forEach(todo => {
        uncompletedTodosDiv.append(createTodoElement(todo))
       }) 
    } else {
        uncompletedTodosDiv.innerHTML = "<div class='empty'> No uncompleted items</div>"
    }
    // 

    // 
    // 
    // 
    // Stopped at 17:36
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    if (completedTodos.length > 0) {
        completedTodosDiv.innerHTML = "<div class"
    }
}

// Save and render
function saveAndRender(){
    save()
    render()
}

// Create todo list item
function createTodoElement(todo){}