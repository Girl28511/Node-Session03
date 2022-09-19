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

// adding specific files to the send request rather than a message "hello" as above. Files must be absolute or specify root. Combine absolute paths. The .. goes back into the main folder or root then finds the file 
app.get("/htmlfiledetails", (req,res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});   

app.post("/test", (req,res) => {
  res.send("THIS IS A POST REQUEST");
});   

// GET POST 

app.all("/all-requests", (req,res) => {
  res.send("This handles all methods");
});   

// Calling next function, it passes the control from one hanlder to another. It has to be the same handler e.g POST LEADS TO NEXT POST. They also have to have the same "details in the brackets"

app.get("/api/:id", (req,res,next) => {
  const id = req.params.id;

  if (id == 2) {
    res.send("This is ID user Andrew"); // if ID is 2 ends here 
  } else {
    next(); // if not 2, this is calling the next matched route which is a GET on line 76 
}});   

app.post("(/api/:id", (req,res,next) => {
  res.send(" No user for this id:" + req.params.id); 
});


app.get("/api/:id", (req,res,next) => {
  res.send("Hello"); // send Hello to the client and then the response 
});


// listen takes two parameters, and the second is callback function for when the server is running 
app.listen(port, () => {
  console.log("Server is up and running") 
});

