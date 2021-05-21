/*
Connect Four

Take a look at wiki description of Connect Four game:

Wiki Connect Four

The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

  piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]
The list may contain up to 42 moves and shows the order the players are playing.

The first player who connects four items of the same color is the winner.

You should return "Yellow", "Red" or "Draw" accordingly.
*/

/*
1. save position
2. build check row, check col, check sequence
*/
function sequenceNum(arrOfArrOld,check){
    let count = 0, maxcount = 0
    let arrOfArr = arrOfArrOld.slice()
    let sorted = arrOfArr.sort((arr1, arr2)=> arr1[check]-arr2[check])//col sequence 
    for (let i = 1; i < sorted.length; i++){
        if ((sorted[i][check] - sorted[i-1][check]) === 1){ 
            count++
        }else {
            maxcount = Math.max(maxcount, count)
            count = 0
        }
    }
    return Math.max(maxcount, count) +1 
}
function whoIsWinner(piecesPositionList){
    
    const rowLenMap = {
        A:[0,0],B:[1,0],C:[2,0],D:[3,0],E:[4,0],F:[5,0],G:[6,0]
    }
    const moveMap = {Red: [], Yellow: []}
    let winner
    function check(player){
        let moves = moveMap[player]
        let index = moves.length-1
        let lastMove = moves[index]
        //check diag
        if ((sequenceNum(moves,1) >= 4) && (sequenceNum(moves,0) >= 4)) {
            console.log("diag")
            return player
        }
        //check row
        sameRow = moves.filter(move => move[0] === lastMove[0])
        if (sameRow.length >= 4){
            if (sequenceNum(sameRow,1) >= 4) return player
        }
        //check col
        sameCol = moves.filter(move => move[1] === lastMove[1])
        if (sameCol.length >= 4){
            if (sequenceNum(sameCol,0) >= 4) return player
        }
        return 0
    }
    piecesPositionList.forEach(turn => {
        let play = turn.split("_") // ["A", "Red"]
        console.log(play[0],rowLenMap[play[0]])
        moveMap[play[1]].push([rowLenMap[play[0]][0],rowLenMap[play[0]][1]])
        rowLenMap[play[0]][1]++
        if (moveMap[play[1]].length >= 4) {
            console.log('check') 
            console.log(check(play[1]))
            if (check(play[1])) winner = check(play[1]) 
        }
    })
    console.log(moveMap)
    return winner || 'Draw'
}

piecesPositionList = ["C_Yellow", //[2,0]
"E_Red", // [4,0]
"G_Yellow", //[6,0]
"B_Red", //[1,0]
"D_Yellow",//[3,0]
"B_Red",//[1,1]
"B_Yellow",//[1,2]
"G_Red",//[6,1]
"C_Yellow",//[2,1]
"C_Red",//[2,2]
"D_Yellow",//[3,1]
"F_Red",//[5,0]
"E_Yellow",//[4,1]
"A_Red",//[0,0]
"A_Yellow",//[0,1]
"G_Red",//[6,2]
"A_Yellow",//[0,2]
"F_Red",//[5,1]
"F_Yellow",//[5,2]
"D_Red",//[3,2]
"B_Yellow",//[1,3]
"E_Red",//[4,2]
"D_Yellow",//[3,3]
"A_Red",//[0,3]
"G_Yellow",//[6,3] win
"D_Red",//[3,4]
"D_Yellow",//[3,5]
"C_Red"]//[2,3]

console.log(whoIsWinner(piecesPositionList))
