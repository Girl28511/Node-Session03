// var http = require("http"),
//   fs = require("fs");
  
// var server = http
//   .createServer(function (request, response) {
//     const url = request.url;
//     console.log(url);

//     if (
//       request.method === "GET" &&
//       (request.url.endsWith("index.html") || request.url.endsWith("/"))
//     ) {
//       // serving our html page
//       fs.readFile("./index.html", function (err, html) {
//         if (err) {
//           throw err;
//         }
//         response.writeHeader(200, {
//           "Content-Type": "text/html",
//         });
//         response.write(html);
//         response.end();
//       });
//     } else {
//       response.writeHead(404);
//       response.end("Sorry file not found");
//     }
//   })
//   .listen(8080);


const express = require("express"); 

const app = express(); // express method creates the express application for you 

const port = 8080; // port variable

// prior to line below being added, error message on local host 8080 said 'Cannot GET/'. There is no handler for the GET request. 
//We need to add a handler for this route
// get method 
app.get("/", (req,res) => {
  res.send("Hello");
});   

// listen takes two parameters, and the second is callback function for when the server is running 
app.listen(port, () => {
  console.log("Server is up and running") 
});

