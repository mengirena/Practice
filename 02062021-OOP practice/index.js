function Stopwatch(){
    let startflag = 0;
    let resetOn = 0;
    let startTime, endTime;
    let duration = 0;
    
    this.start = function(){
        resetOn = 0;
        if (startflag === 1){
            throw new Error("Stopwatch has already started!")
        }else{
            startTime = new Date().getTime();
            startflag = 1;
        }

    };
    
    this.stop = function(){
        if (startflag === 1){
            endTime = new Date().getTime();
            startflag = 0;
            duration += (endTime-startTime)/1000;
        }else{
            throw new Error("Stopwatch is not started yet.")
        }
    };

    this.reset = function(){
        
        duration, startTime, endTime= 0;
    };


    Object.defineProperty(this,'duration',{
        get: function(){
            return duration
        }
    })
}

function Calculator(){
    this.val1=0
    this.val2=0
    this.read = ()=>{
        this.val1=prompt("insert v1")
        this.val2=prompt("insert v2")
    }
    this.sum=()=>{
        return Number(this.val1)+Number(this.val2)
    }
    this.mul=()=>{
        return this.val1*this.val2
    }
}

function Accumulator(startingValue){
    this.value = startingValue
    this.read = ()=>{
        this.value += +prompt("insert")
    }
}