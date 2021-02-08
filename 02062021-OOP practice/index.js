function Stopwatch(){
    let startflag = 0;
    let resetOn = 0;
    let startTime, endTime;
    let duration = 0;
    const calculateDuration = function(){
        duration += (endTime-startTime)/1000
        return duration;  
    }
    
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
        }else{
            throw new Error("Stopwatch is not started yet.")
        }
    };

    this.reset = function(){
        if(startTime && endTime ) resetOn = 1;
        duration, startTime, endTime= 0;
    };


    Object.defineProperty(this,'duration',{
        get: function(){
            if (startTime && endTime && resetOn == 0){
                return calculateDuration()
            }else{
                resetOn = 0;
                return 0
            }
        }
    })
}