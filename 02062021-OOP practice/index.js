function Stopwatch(){
    let startflag = 0;
    let startTime, endTime;
    const calculateDuration = function(){
        return (endTime-startTime)/1000;  
    }
    
    this.start = function(){
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
        this.duration = 0;
    };


    Object.defineProperty(this,'duration',{
        get: function(){
            typeof startTime
            if (startTime && endTime){
                return calculateDuration()
            }else if(startTime){
                throw new Error("Timer is on-going!")
            }else{
                return 0
            }
        }
    })
}