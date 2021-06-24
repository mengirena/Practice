const billValue = document.querySelector("#bill_value")
const tipValue = document.querySelector("#tip_value")
const splitBox = document.querySelector(".pop_up")
const splitValue = document.querySelector("#head_count")
const roundBtn = document.querySelector("#round")


billValue.addEventListener("change", changeTotal)
tipValue.addEventListener("change", changeTotal)
splitValue.addEventListener("change", updateSplit)
roundBtn.addEventListener("click", roundNum)

let total, splitted

function changeTotal(){
    const bill = Number(billValue.value)
    const tip = Number(tipValue.value)
    document.querySelector("#total").innerHTML = roundWithZero(bill*(1+tip/100))
    splitBox.style.height = "40%"
    splitValue.value && updateSplit()
}

function updateSplit(){
    splitted = total/(Number(splitValue.value)+1)
    document.querySelector("#split").innerHTML = `<strong>${addDigit(splitted)}</strong>`
}

function roundNum(){
    if (splitted && splitValue.value && Array.from(roundBtn.classList).includes("float")){
        document.querySelector("#split").innerHTML = `<strong>${roundWithZero(splitted)}</strong>`
        roundBtn.classList.toggle("clicked")
        roundBtn.classList.toggle("float")
    }else if(splitted && splitValue.value && Array.from(roundBtn.classList).includes("clicked")){
        document.querySelector("#split").innerHTML = `<strong>$${splitted}</strong>`
        roundBtn.classList.toggle("clicked")
        roundBtn.classList.toggle("float")
    }
}

function roundWithZero(num){
    total = Math.round(num*100)/100
    return addDigit(total)
}

function addDigit(num){
    const temp = num.toString().split(".")
    return `${(temp.length == 1) ? `$${num}.00` : (temp[1].length === 1) ? `$${num}0` : `$${num}`}`
}