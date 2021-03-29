const http = require("http");

//Create server object
http
  .createServer((req, res) => {
    //Wrtie response
    res.write("hello world");
    res.end();
  })
  .listen(5000, () => {
    console.log("Server running...");
  });
