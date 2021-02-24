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
    let str = "";
    let flag = -1;
    let flag2 = false;
    for (let i =0; i<list.length; i++){
        let dif = copyList[i]-list[i]
        if(dif !== 1 && dif !== flag && flag2 !== (dif===flag)){
            str += "-" + list[i]
        }else if(dif !== 1 && dif !== flag && flag2 === (dif===flag)){
            str += ","+list[i]
        }else if(dif !== 1 && (dif !== flag)){
            str += "!"+list[i]
        }else if(dif === 1 && (dif !== flag)){
            str += ","+list[i]
        } else if(dif !== 1){
            str += ","+list[i]
        }
        
        flag2=dif===flag  
        flag=dif;    
    }
    return str.slice(1)
}

//solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
//           [ 3,  1,  1,  1, 1, 2, 1, 1, 2, 1, 1, 1,  1,  3,  1,  2,  1,  1,  1]
//         [-3, -2, -1,  0, 1, 3, 4, 5, 7, 8, 9,10, 11, 14, 15, 17, 18, 19, 20]
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 20, 21, 22, 24]))
//       [-3, -2, -1,  0, 1, 3, 4, 5]
//       [3,  1,   1,  1, 1, 2, 1, 1]