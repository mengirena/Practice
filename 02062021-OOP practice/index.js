function Stopwatch(){
    this.duration = 0;
    let startflag = 0;
    let currentTime;
    const duraFormat = function(){

    }
    
    this.start = function(){
        if (startflag === 1){
            throw new Error("Stopwatch has already started!")
        }else{
            currentTime = new Date().getTime();
            startflag = 1;
        }
        
    };
    this.stop = function(){

    };
    this.reset = function(){

    };
}