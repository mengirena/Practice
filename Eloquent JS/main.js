function arrayToList(array){
  let storeObj = []
  
  for (let i = 0 ; i < array.length; i++){
    storeObj.push({value: array[i],rest:""})
    if (i === array.length-1){
      storeObj[i].rest = null
    }else if(i>0){
      storeObj[i-1].rest = storeObj[i]
    }
  }
  return fstoreObj[0]
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