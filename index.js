var express = require('express'),
   app = express(),
   server = require('http').Server(app),
   io = require('socket.io')(server);

app.use(express.static(__dirname));

/*
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
});
*/

io.on('connection', function (socket) {
   console.dir(socket)
   socket.emit('news', {hello: 'world'});
   socket.on('my other event', function (data) {
      console.log('from client', data);
   });
});

var port = 3002;
server.listen(port, function () {
   console.log('listening on ', port)
});

