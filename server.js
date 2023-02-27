const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("questions.json", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
