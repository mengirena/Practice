const fs = require("fs");
const path = require("path");

// //create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {
//   if (err) throw err;
//   console.log("Folder created...");
// }); // this method by default is asynchronous there's a synchronous version

// //create and write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello yo!",
//   function (err) {
//     if (err) throw err;
//     console.log("Files written to...");

//     //append file since it's async, it's included in the callback
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "Ho Ho yo!",
//       function (err) {
//         if (err) throw err;
//         console.log("Files written to...");
//       }
//     );
//   }
// );

//Read file
fs.readFile(
  path.join(__dirname, "/test", "hello.txt"),
  "utf8",
  function (err, data) {
    if (err) throw err;
    console.log(data);
  }
);

//Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloYa.txt"),
  function (err) {
    if (err) throw err;
    console.log("File renamed");
  }
);
