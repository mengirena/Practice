let foodChain = {
    antelope: ["grass"],
    'big-fish': ["little-fish"],
    bug: ["leaves"],
    bear: ["big-fish","bug","chicken","cow","leaves","sheep"],
    chicken: ["bug"],
    cow: ["grass"],
    fox: ["chicken","sheep"],
    giraffe: ["leaves"],
    lion: ["antelope","cow"],
    panda: ["leaves"],
    sheep: ["grass"]
}


var whoEatsWho = function(zoo) {
    let pointer = 0
    let returnArr = [zoo]
    let animals = zoo.split(",").slice()
    while (pointer < animals.length){
        console.log("pointer",pointer)
        let currentAnimal = animals[pointer]
       if(currentAnimal in foodChain){
           if(foodChain[currentAnimal].includes(animals[pointer-1])){
               returnArr.push(`${currentAnimal} eats ${animals[pointer-1]}`)
               animals.splice(pointer-1,1)
               pointer = (pointer-2 > 0) ? pointer-2 : 0 
           }else if (foodChain[currentAnimal].includes(animals[pointer+1])){
               returnArr.push(`${currentAnimal} eats ${animals[pointer+1]}`)
               animals.splice(pointer+1,1)
           }else{
                pointer++
           }
       }else{pointer++} 
       console.log(animals)
    }
    returnArr.push(animals.join(","))
    return  returnArr
  }

console.log(whoEatsWho("fox,bug,chicken,grass,sheep"))