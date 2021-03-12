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
            console.log(`Player${this.player} has a turn`)
            
            break;
        }
        i--
    }
    return `${i}-${col}`
};

function checkConnection(i,col){

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