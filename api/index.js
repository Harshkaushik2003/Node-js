// const a = {
//   average: (a, b) => {
//     console.log((a + b) / 2);
//   },
//   percent: (a, b) => {
//     console.log((a / b) * 100);
//   },
// };

// module.exports = a;

// File based, Build in, third-party

// const { log } = require("console");
// const fs = require("fs");

// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }

//   //  10000
//   console.log(data);
// });

// Ye oopar wala code asynchronous hai isliye ye kaam krta rahega or iske aage ka code run ho jayega
// console.log("I am first");

// const fs = require("fs");
// const a = fs.readFileSync("./sample.txt", "utf-8");

// const a = "This is made by 6PP";

// fs.writeFile("./sample.txt", a, () => {
//   console.log("Written");
// });

// console.log(a);

// const a = "This is made by 6 pack programmer";
// fs.writeFileSync("./sample.txt", a);

// console.log("I am first");

// path name

// const path = require("path");

// const b = path.extname("/node/index.js");

// const b = path.basename("D:/B.Tech/MERN Stack/Node js>")

// const b = path.dirname("D:/B.Tech/MERN Stack/Node js>")

// console.log(b);

// const os = require("os");

// console.log(os.totalmem());

const http = require("http");
const fs = require("fs");
const PORT = 2000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html", "utf-8");

console.log(__filename);
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end("<h1> ABOUT PAGE </h1>");
  }
  if (req.url === "/contact") {
    return res.end("<h1>CONTACT PAGE </h1>");
  }
  if (req.url === "/service") {
    return res.end("<h1>SERVICE PAGE</h1>");
  } else {
    return res.end("<h1> 404 Page Not Found </h1>");
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server is working on http://${hostname}:${PORT}`);
});
