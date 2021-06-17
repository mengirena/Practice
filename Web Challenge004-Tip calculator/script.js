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

    splitBox.style.height = "22%"
    splitValue.value && updateSplit()
}

function updateSplit(){
    splitted = total/splitValue.value
    document.querySelector("#split").innerHTML = `<strong>$${splitted}</strong>`
}

function roundNum(){
    console.log("clicked round")
    if (splitted){
        console.log("in")
        document.querySelector("#split").innerHTML = `<strong>${roundWithZero(splitted)}</strong>`
        console.log(roundBtn)
        console.log(roundBtn.classList)
        roundBtn.classList.toggle("clicked")
        roundBtn.classList.toggle("float")
    }
}

function roundWithZero(num){
    total = Math.round(num*100)/100
    const temp = total.toString().split(".")
    return `${(temp.length == 1) ? `$${total}.00` : (temp[1].length === 1) ? `$${total}0` : `$${total}`}`
}

function addDigit(num){
    
}