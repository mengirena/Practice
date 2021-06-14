const cardClick = Array.from(document.querySelectorAll(".card"))
const planClick = Array.from(document.querySelector(".plan"))

cardClick.forEach(card => card.addEventListener("click", enlargeTheClicked))
cardClick.forEach(card => card.addEventListener("mouseleave", removeEnlarge))


function enlargeTheClicked(){
    let cards = ['eco', 'classic', 'lux']
    cards.forEach(card=>{
        if (card == this.id){
            this.classList.toggle("emphasis")
        }else{
            document.querySelector(`#${card}`).classList.toggle("defocus")
        }
    })
}

function removeEnlarge(){
    let cards = ['eco', 'classic', 'lux']
    cards.forEach(card=>{
        if (card == this.id){
            this.classList.remove("emphasis")
        }else{
            document.querySelector(`#${card}`).classList.remove("defocus")
        }
    })
}