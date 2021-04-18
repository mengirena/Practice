const deleteBtns = document.querySelectorAll('.delete-btn')
const todoItem = document.querySelectorAll('.todoItem span')
const todoComplete = document.querySelectorAll('.todoItem span.completed')

Array.from(deleteBtns).forEach(deleteBtn => {
    deleteBtn.addEventListener('click',deleteTodo)
})

Array.from(todoItem).forEach(todoItem => {
    todoItem.addEventListener('click',markComplete)
})

Array.from(todoComplete).forEach(complete => {
    complete.addEventListener('click',undo)
})

async function deleteTodo(){
    const todoText = this.parentNode.childNodes[1].innerText
    try {
        const response = await fetch('deleteTodo', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'rainbowUnicorn': todoText
            })
        })
        const data = await response.json()
        console.log('main',data)
        location.reload()
    } catch (error) {
        console.error(error)
    }
}

async function markComplete(){
    const todoText = this.parentNode.childNodes[1].innerText
    try {
        const response = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'rainbowUnicorn': todoText
            })
        })
        const data = await response.json()
        console.log('main',data)
        location.reload()
    } catch (error) {
        console.error(error)
    }
}

async function undo(){
    const todoText = this.parentNode.childNodes[1].innerText
    try {
        const response = await fetch('undo', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'rainbowUnicorn': todoText
            })
        })
        const data = await response.json()
        console.log('main',data)
        location.reload()
    } catch (error) {
        console.error(error)
    }
}