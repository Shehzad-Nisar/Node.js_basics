const http = require('http');

const server = http.createServer((req, res) =>{
    console.log("hello from server");
    console.log("hiii");
})


const PORT = 3005;

server.listen(PORT, ()=>{
    console.log("server is listening 3003.");
})