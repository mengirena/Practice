const deleteBtns = document.querySelectorAll('.delete-btn')
console.log('main')

Array.from(deleteBtns).forEach(deleteBtn => {
    deleteBtn.addEventListener('click',deleteTodo)
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
        console.log(data)
        location.reload()
    } catch (error) {
        console.error(error)
    }
}
