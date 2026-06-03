const http = require('http');

const server = http.createServer((req,res)=>{

    res.setHeader("Content-Type" , "text/html")
    if(req.url === '/'){
        return res.end(`
            <html>
                <body>
                    <h1>Wellcome to Home.</h1>
                </body>
            </html>
        `)
    } else if (req.url=== '/products'){
        return res.end(`
            <html>
                <body>
                    <h1>Checkout our products</h1>
                </body>
            </html>
        `)
    } else if (req.url === '/about'){
        return res.end(`
            <html>
                <body>
                    <h1>about us</h1>
                </body>
            </html>
        `)
    } else {
        return res.end(`
            <html>
                <body>
                    <h1>wellcome back to home.</h1>
                </body>
            </html>
        `)
    }
   

   

    
});

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log("server is listening at port no 3000:")

}
)