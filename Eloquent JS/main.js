function arrayToList(array){
  let rArr = array.reverse()
  let first = {}
  let rest = {}
  for (let i = 0 ; i < rArr.length; i++){
    rest.value = rArr[i]
    if (i === 0) rest.rest = null
    if(i !== rArr.length -1){
      first.value = ""
      first.rest = rest
      rest = first
    }
  }
  return first
}

function listToArray(){

}

function prepend(){

}

function nth(){

}


console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20