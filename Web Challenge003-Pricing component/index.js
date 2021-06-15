const cardClick = Array.from(document.querySelectorAll(".card"))
const planClick = document.querySelector(".plan")
const cardPrice = document.querySelectorAll(".card p em")
const purchase = Array.from(document.querySelectorAll("button"))
let newPrice = [], currentPrice = []

cardClick.forEach(card => card.addEventListener("click", enlargeTheClicked))
cardClick.forEach(card => card.addEventListener("mouseleave", removeEnlarge))
purchase.forEach(btn => btn.addEventListener("click", onClick))
planClick.addEventListener("click", rotatePlan)

cardPrice.forEach((ele, index)=>{
    currentPrice[index] = Number(ele.innerHTML.match(/\d+.\d+/)[0])
    newPrice[index] = Math.floor(currentPrice[index]*12*0.8*100)/100
})

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

function rotatePlan(){
    console.log(this.firstElementChild.style.transform)
    if(this.firstElementChild.style.transform === ""){
        this.firstElementChild.style.transform = "rotateY(-180deg)"
        cardPrice.forEach((ele, index)=>{
            ele.innerHTML = `$${newPrice[index]}/year`
        })
    }else{
        this.firstElementChild.style.transform = ""
        cardPrice.forEach((ele,index)=>{
            ele.innerHTML = `$${currentPrice[index]}/month`
        })
    }
}

function onClick(){
    
}