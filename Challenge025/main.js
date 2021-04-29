/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

arrayDiff([1,2,2,2,3,3,4,5],[2,4]) == [1,3,3,5]
*/

/*
1. loop through array a, check if each element is inside array b
2. if yes then push to the final result, it not doesn't return
*/

function arrayDiff(a, b) {
  return a.reduce((result,current)=>{
      if (!b.includes(current)) result.push(current)
      return result
  },[])
}


//others method
function arrayDiff(a,b){
    return a.filter(el=>{!b.includes(el)})
}