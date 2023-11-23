const url = require ('url');

const myURL = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myURL.href);

console.log(myURL.toString());

//Hostname
console.log(myURL.host);

// Pathname
console.log(myURL.pathname);

//Serialized query
console.log(myURL.search);

//Params object
console.log(myURL.searchParams);