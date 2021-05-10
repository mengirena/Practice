//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    return x.split("").filter(letter=>letter !== " ").join("")
}

//other's metod
function noSpace(x){return x.split(' ').join('')}

function noSpace(x){
    return x.replace(/\s/g, '');
  }