const http = require('http');
const reqHandler = require('./handler');

const server = http.createServer(reqHandler);

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}.`)
}
)