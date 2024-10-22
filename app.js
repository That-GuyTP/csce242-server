var http = require("http");
const port = process.env.PORT || 3001;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World! Hello Thomas!");
  })
  .listen(port);

  //node app.js to launch on local
  //ctrl + c to close it down.
