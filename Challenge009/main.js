/*
Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

Sudoku rules:

Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

Rows:

There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

Columns:

There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

Regions

A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.

Valid board example:

For those who don't know the game, here are some information about rules and how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/

*/
/*
function doneOrNot(board){
    for (let i = 0; i < board.length; i++) {
        let sumOfRow =board[i].reduce((sum, current)=>{
            sum += current
            return sum
        }, 0)
        let sumOfCol = board.reduce((sum, current) => {
            sum += current[i]            
            return sum
        }, 0)
        let sumOfRegion = 0
        for (let j=0; j<9; j++){
            sumOfRegion += board[Math.floor(j/3)+(Math.floor(i/3))*3][j%3+3*(i%3)]
        }
        if (sumOfRow != 45 || sumOfCol != 45 || sumOfRegion != 45) {
        return "Try again!"
        }
    }
    return "Finished!"
}
*/

function doneOrNot(rows){

    var columns = []
    ,    blocks = [];
    
    for (var i = 0; i < 9; i++) {
      columns[i] = [];
      
      for (var j = 0; j < 9; j++) {
        var k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
        console.log(blocks[k])
        console.log(blocks[k] || [])
        blocks[k] = blocks[k] || [];
        
        blocks[k].push(rows[i][j]);
        columns[i].push(rows[j][i]);
      }
    }
    
    var is_valid_row = (row) => row.slice(0).sort((a, b) => a - b).join('') == '123456789';
    
    var is_valid = rows.every(is_valid_row) 
      && columns.every(is_valid_row) 
      && blocks.every(is_valid_row);
    
    return is_valid ? 'Finished!' : 'Try again!';
  }

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]))

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]]))
