/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
*/

function solution(list){
    let copyList = list.slice();
    copyList.shift();
    let flag = list[1]-list[0], str = "";
    let flag2 = []
    for (let i =0; i<=copyList.length; i++){
        let dif = copyList[i]-list[i]
        if (dif === flag && dif !== 1){
            str += list[i].toString() + ","
            flag2[i] = true
        }else if(dif !== flag && dif === 1){
            str += list[i].toString()
            flag2[i] = false
        }else if (dif !== flag && dif !== 1 && flag2[i-1]===false){
            str += "," + list[i].toString() + ","
            flag2[i] = false
        }else if(dif !== flag && dif !== 1){
            str += "-" + list[i].toString() + ","
            flag2[i] = false
        }
        flag = dif
    }
    return str.slice(0,str.length-1)
}

//solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
//           [ 3,  1,  1,  1, 1, 2, 1, 1, 2, 1, 1, 1,  1,  3,  1,  2,  1,  1,  1]
//         [-3, -2, -1,  0, 1, 3, 4, 5, 7, 8, 9,10, 11, 14, 15, 17, 18, 19, 20]
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
//       [-3, -2, -1,  0, 1, 3, 4, 5]
//       [3,  1,   1,  1, 1, 2, 1, 1]