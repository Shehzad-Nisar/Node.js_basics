const http = require('http');
const fs = require('fs');

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
            <h1>welcome to home. <h1>
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
    } else if (req.url.toLowerCase() === '/submit-details' && req.method== 'POST'){
       fs.writeFileSync('user.txt', 'Ziaraf Hussain');
       res.statusCode = 302;
       res.setHeader("location", "/");
       return res.end();
    } 
    else {
        res.statusCode = 404;
        res.write("<h1>Error found 404 errord <h1>")
    }
   

   

    


})

// port where our server will listen
const PORT = 3004;

server.listen(PORT, ()=>{
    console.log("server is listening at 3004 port.")
})