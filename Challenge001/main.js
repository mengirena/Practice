/*
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
*/

function dirReduc(arr){
    let valueForDir = [1,-1,1,-1];
    [Nrepeat,Wrepeat] = arr.reduce((sum,current)=>{
        let index = arr.indexOf(current);
        if (index === 0 || index === 1){
            sum[0] += valueForDir[index];
        } else{
            sum[1] += valueForDir[index]
        }
        
    },[0,0])

}s