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
    let str = "";
    let flag1 = selfDiff(list);
    let flag2 = selfDiff(flag1);
    let counter = 0;
    while(counter < list.length){
        if(flag2[counter] === 0 && flag1[counter] === 1){
            if(flag1[counter-1]!= 1){
                str += list[counter] + "-";
                counter += 2
            }else{
                counter += 2
            }
        }else if (flag2[counter] === undefined && flag1[counter] !== undefined){
            if(flag1[counter] === 1 && flag1[counter-1] === 1){
                counter ++
            }else{
                str += list[counter] + ",";
                counter ++ 
            }
        }else{
            str += list[counter] + ",";
            counter++
        }
    }
    return str.slice(0,str.length-1)
}
function selfDiff(list){
    let copyList = list.slice();
    copyList.shift();
    let result = [];
    for (let i = 0; i <copyList.length; i++){
        result.push(copyList[i]-list[i])
    }
    return result
}
//solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
console.log(solution([-60,-58,-57,-56,-55,-54,-53,-50]))
//'-77,-74,-73,-70,-67,-66,-63,-60,-58--53,-50,-47,-45,-43--41,-39,-37--35,-32,-29,-27,-25,-24'
//'-77,-74,-73,-70,-67,-66,-63,-60,-58--54,-53,-50,-47,-45,-43--41,-39,-37--35,-32,-29,-27,-25,-24'