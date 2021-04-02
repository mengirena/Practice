const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    //call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

//module.exports = Logger;

//instead of expoert the logger
//we can also run it here
const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener", data));

logger.log("hello");
logger.log("you");
