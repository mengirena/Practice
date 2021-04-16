const deleteBtns = document.querySelectorAll('.delete-btn')
console.log('main')

Array.from(deleteBtns).forEach(deleteBtn => {
    deleteBtn.addEventListener('click',deleteTodo)
})

function deleteTodo(){
    alert('clicked')
}
