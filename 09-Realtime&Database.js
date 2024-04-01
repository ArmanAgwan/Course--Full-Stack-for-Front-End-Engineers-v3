// //----------Realtime & Database----------//

// * Websockets
// * Files
// * Databasees

// //----------Websockets----------//

// 1- Update nginx configuration
// 2- Create a new nodejs server
// 3- Enable websockets 

// ---> Websockets: Persistent bidirection connection between client
//                  and server. 


// location / {
//    proxy_set_header Upgrade $http_upgrade:
//    proxy_set_header Connection "upgrade";

//    proxy_pass http://127.0.0.1:3000;
// }    


const express = require('express');
const server = require('http').createServer();
const app = express();

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: _dirname});
});

server.on('request', app);
server.listen(3000, function () {console.log('Listening on 3000'); });