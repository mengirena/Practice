const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8000/hello.html?id=100&status=active"
);

//Serialized URL
console.log(myUrl.href);
console.log();

//host (root domain)
console.log(myUrl.host);

//hostnmae doesn't include port
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//Add para
myUrl.searchParams.append("abc", "123");
console.log(myUrl);

//
