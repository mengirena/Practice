/*
589
Simple Fun #209: Largest Room Area 

Task

You have been given a matrix filled with 1s and 0s, where 1 represents a wall, and 0 represents empty space.

Your task is to find the largest room in the given matrix, i.e. the largest area filled only with 0s.

Input/Output

[input] 2D integer array rooms
A rectangular matrix filled with 1s and 0s.

[output] an integer
The area of the largest room.

Example

For

rooms = [[1,1,1,1,1,1], 
           [1,0,1,0,0,1],
           [1,0,1,0,0,1],
           [1,1,1,1,1,1]]```
the output should be `4`.

 For
rooms = [[1, 0], [0, 1]]``` the output should be 1.

*/

// function markWall(array){
//     return array.map(arr=>{
//         return arr.map(ele=>{
//             return (ele === 1) ? -1 : 1
//         })
//     })
// }
// function merge(array, row, col){
//     //replace array[row][col-1] to array[row][col]
//     let findN = array[row][col-1], toN = array[row][col]
//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; j < array[0].length; j++){
//             if (array[i][j] === findN) array[i][j] = toN 
//         }
//     }
//     return array
// }

// function largestRoomArea(array) {
//     let flag = [0,0]
//     array = markWall(array)
//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; j < array[0].length; j++){
//             console.log('i',i, " j", j)
//             if (array[i][j] === 1){
//                 if(array[i-1] && array[i-1][j] !== -1) {
//                     array[i][j] = array[i-1][j]
//                     flag[array[i-1][j]]++
//                     if (array[i][j-1] && array[i][j-1] !== -1 && array[i][j-1] !== array[i][j]){
//                         replace = flag[array[i][j-1]] 
//                         array = merge(array,i,j)
//                         flag[array[i][j]] += replace
//                     }
//                 }else if (array[i][j-1] && array[i][j-1] !== -1) {
//                     array[i][j] = array[i][j-1]
//                     flag[array[i][j]]++
//                 }else{
//                     flag.push(1)
//                     array[i][j] = flag.length-1
//                 }

//             }
//             console.log(array[i][j])
//             console.log('flag',flag)
//         }
//     }
//     console.log(flag)
//     return Math.max(...flag,0)
// }

console.log(largestRoomArea([
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
[0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1],
[0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1],
[0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0],
[0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0],
[0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0],
[1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0],
[0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
[0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
[0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
[0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0] 
]))

//other's method
//crawled all the continuous patch and find the current patch size
function largestRoomArea(rooms) {
    let current = 0,
        largest = 0;
    
    function process(x,y) {
      if(rooms[y][x] === 0) {
        rooms[y][x] = 2;
        current++;
        if(x > 0) process(x-1,y);
        if(x <= rooms[y].length-2) process(x+1,y);
        if(y > 0) process(x,y-1);
        if(y <= rooms.length-2) process(x,y+1);
      }
    }
    
    for(let y=0; y<rooms.length; y++) {
      for(let x=0; x<rooms[y].length; x++) {
        process(x,y);
        if(current > largest) largest = current;
        current = 0;
      }
    }
    return largest;
  }

  function largestRoomArea(rooms) {
    var fill = (i,j) => (rooms[i]||[])[j] === 0 ? (rooms[i][j]=1) + fill(i-1,j) + fill(i+1,j) + fill(i,j-1) + fill(i,j+1) : 0;
    return rooms.reduce((l,x,i) => x.reduce((l,x,j) => Math.max(l, fill(i,j)), l), 0);
  }