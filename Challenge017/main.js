/*
Connect 4

7 columns and 6 rows

*/
function Connect4 (){
    this.player = 1
    this.board = [[0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0]]
};
  
Connect4.prototype.play = function (col){
    let i = 5
    
    while(i>=0){ 
        if(this.board[i][col] === 0){
            this.board[i][col] = this.player
            checkCategory(i,col)
            console.log(`Player ${this.player} has a turn`)
            break;
        }
        i--
    }
    this.player = (this.player === 1) ? 2 : 1
    return `${i}-${col}`
};

function checkCategory(i,col){
    let section = [["a","a","a","b","c","c","c"],
                    ["a","a","a","b","c","c","c"],
                    ["a","a","a","b","c","c","c"],
                    ["d","d","d","e","f","f","f"],
                    ["d","d","d","e","f","f","f"],
                    ["d","d","d","e","f","f","f"]]
    return section[i][col]
}
/*
[    [0,1,2,3,4,5,6]
    0[0,0,0,0,0,0,0], 
    1[0,0,0,0,0,0,0],
    2[0,0,0,0,0,0,0],
    3[0,0,0,0,0,0,0],
    4[0,0,0,0,0,0,0],
    5[0,0,0,0,0,0,0]
]
*/
game = new Connect4();
console.log(game.play(0))
console.log(game.play(0))