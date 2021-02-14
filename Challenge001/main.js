/*
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
*/

function dirReduc(arr){
    let len = arr.length;
    let note = ["NORTH", "WEST", "EAST", "SOUTH"];
    if (len >= 2){
        let checker = 0;
        do {
            if(note.indexOf(arr[checker])+ note.indexOf(arr[checker+1]) === 3){
                arr.splice(checker,2);
                if (checker !== 0 ){checker--}
            } else{
                checker++;
            }       
        } while (arr.length>=checker+2);
    }
    return arr    
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))