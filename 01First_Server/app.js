// Import built-in HTTP module from Node.js (used to create server)
const http = require('http');


// Create a server using HTTP module
// This function runs every time a client sends a request
const server = http.createServer((req, res) => {

    // Print the requested URL in terminal (e.g. "/", "/about")
    console.log("URL:", req.url);

    // Send response back to browser and end the request
    res.end("hello from server:");

});

// Define the port number where server will run
const PORT = 3000;

// Start the server and make it listen for incoming requests
server.listen(PORT, () => {

    // This message shows only when server starts successfully
    console.log("server is listening on port 3000...");
});