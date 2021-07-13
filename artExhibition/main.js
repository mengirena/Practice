const heart = document.getElementById("heart")
const rect = document.getElementById("rect")

heart.addEventListener("click", print)
rect.addEventListener("click", print)

function print(){
    alert("clicked")
}