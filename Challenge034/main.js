/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input

customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output

The function should return an integer, the total time required.

Important

Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples

queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications

There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
*/

/*
1. make a inprocessing group
2. minus the smallest number in the group, record the time
3. how many slots are not in service, push them to inprocess
*/

function queueTime(customers, n) {
    const slots = Math.min(customers.length,n)
    let processing = []
    for (let i = 0; i < slots ; i ++){processing.push(customers.shift())}
    console.log('initial processing', processing)
    let total = 0
    console.log(processing.filter(ele => ele == 0).length)

    //for (let i = 0; i < 100; i ++){
    while (processing.filter(ele => ele <= 0).length < slots){
        let time = (processing.filter(ele => ele >0).length) ? Math.min(...processing.filter(ele => ele >0)) : 0 
        console.log("time", time)
        processing = processing.map(ele => {
            console.log('customers',customers)
            return ((ele-time) == 0) ? ((customers[0]) ? customers.shift() : 0 ): ele-time
        })
        console.log("round",processing)
        total += time
        console.log('filter',processing.filter(ele => ele <= 0).length)
    }
    return total
}

console.log('queue', queueTime([6,5,44,44,17,19,15,5,23,46,37,12,45,46,23,47,30,43], 5))
// console.log('queue', queueTime([2,2,3,3,4,4], 2))
// console.log('queue', queueTime([1,2,3,4,5], 100))


//others' method
//add the customer to the earliest finish till
function queueTime(customers, n) {
    var w = new Array(n).fill(0);
    for (let t of customers) {
      let idx = w.indexOf(Math.min(...w));
      w[idx] += t;
    }
    return Math.max(...w);
  }