const billValue = document.querySelector("#bill_value")
const tipValue = document.querySelector("#tip_value")
const splitBox = document.querySelector(".pop_up")
const splitValue = document.querySelector("#head_count")

billValue.addEventListener("change", changeTotal)
tipValue.addEventListener("change", changeTotal)
splitValue.addEventListener("change", updateSplit)

let total

function changeTotal(){
    const bill = Number(billValue.value)
    const tip = Number(tipValue.value)
    total = Math.round((bill*(1+tip/100))*100)/100
    const temp = total.toString().split(".")
    document.querySelector("#total").innerHTML = `${(temp.length == 1) ? `$${total}.00` : (temp[1].length === 1) ? `$${total}0` : `$${total}`}`

    splitBox.style.height = "20%"
    splitValue.value && updateSplit()
}

function updateSplit(){
    document.querySelector("#split").innerHTML = `<strong>$${total/splitValue.value}</strong>`
}