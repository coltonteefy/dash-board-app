// CREATING A SERVER
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  console.log('req was made: ' + req.url);
  //res.writeHead(200,{'Content-Type': 'text/html'});
  res.writeHead(200,{'Content-Type': 'application/json'});

  // var myReadStream = fs.createReadStream(__dirname + '/template/index.html', 'utf8');
  // myReadStream.pipe(res);

  //json object sent back to client
  var myHero = {
    name: 'Allmight',
    superpower: 'One for All',
    status: 'retired'
  };

  // end res and send to my browser
  res.end(JSON.stringify(myHero));
});

server.listen(3050, '127.0.0.1');
console.log('now listening to port 3050');
