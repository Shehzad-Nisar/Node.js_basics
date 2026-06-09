const http = require("http");

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);
        res.setHeader("Content-Type", "text/html");
        if (req.url === '/') {
            return res.end(`
                <!DOCTYPE html>
    <html>
    <head>
        <title>My Homepage</title>
    </head>
    <body>
    
        <!-- Navbar -->
        <nav>
            <a href="/">Home</a> |
            <a href="/about">About</a> |
            <a href="/services">Services</a> |
            <a href="/contact">Contact</a>
            <a href="/addToCart">Add to Cart</a>
        </nav>
    
        <hr>
    
        <!-- Main Content -->
        <h1>Welcome to My Website</h1>
    
        <p>
            This is a simple homepage created with HTML.
        </p>
    
        <button>Learn More</button>
    
        <hr>
    
        <!-- Footer -->
        <footer>
            <p>© 2026 shehzad nisar</p>
        </footer>
    
    </body>
    </html>`)
        } else if (req.url === '/about') {
            return res.end(`
                <h1>welcome to about section.
                
                `)
    
        } else if (req.url === '/services') {
            return res.end(`
                <h1>welcome to services section.
                
                `)
    
        } else if (req.url === '/contact') {
            return res.end(`
                <h1>welcome to contact section.`)
        } else if (req.url === '/addToCart') {
            return res.end(`
                <h1> Give us your details <h1>
                <form action= "/submit-details" method= "POST">
                <input type= "text" id= "name" name="name" placeholder= "enter your name"><br><br>
                <label for= "male">Gender</label>
                <input type= "radio" name= "gender" id= "male" value = "male">
                <label for= "male">male</label>
                <input type= "radio" name= "gender" id= "female" value = "female">
                <label for= "male">female</label> <br><br>
                <input type= "submit" value= "Submit">
                </form>
                
                
                `)
        } else if (req.url.toLowerCase() === '/submit-details' && req.method == 'POST') {

            const body= [];
            req.on("data", (chunk)=>{
                console.log(chunk);
                body.push(chunk);
            })

            req.on("end", ()=>{
                const fullBody = Buffer.concat(body).toString();
                console.log(fullBody);
            })

            res.setHeader('location', '/')
            res.statusCode = 302;
            res.end();
        }
    }
    

);


const PORT = 3001;
server.listen(PORT, ()=>{
    console.log("server is listening at port no 3001")
})