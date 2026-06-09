const http = require("http");

const server = http.createServer((req, res)=>{

});


const PORT = 3001;
server.listen(PORT, ()=>{
    console.log("server is listening at port no 3001")
})