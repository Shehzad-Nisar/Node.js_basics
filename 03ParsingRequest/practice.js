const http = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/') {
        return res.end(`
         <!DOCTYPE html>
         <html lang="en">
         <head>
             <title>server</title>
         </head>
         <body>
             <header>
                 <nav>
                     <a href="/"></a>
                     <a href="/about">Home</a>
                     <a href="/products">Products</a>
                     <a href="/details">Add details</a>
                     <a href="/submit-details">Submit details</a>
                     
                 </nav>
             </header>
             
         </body>
         </html>
        
        `)
    } else if (req.url === '/about') {
        return res.end(`
         <!DOCTYPE html>
         <html lang="en">
         <head>
             <title>server</title>
         </head>
         <body>
             <h1> Welcome to About us section. <h1>
             
         </body>
         </html>
        
        `)
    } else if (req.url === '/products') {
        return res.end(`
         <!DOCTYPE html>
         <html lang="en">
         <head>
             <title>server</title>
         </head>
         <body>
             <h1> Welcome to Products us section. <h1>
             
         </body>
         </html>
        
        `)
    } else if (req.url === '/details') {
        return res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Document</title>
            </head>
            <body>
            
                <h1>Give us your details</h1>
                <form action="/submit-details"  method="POST">
            
                    <input type="text" name="username" placeholder="username">
                    <br><br>
                    <label for="gender"><b>Gender:</b></label>
                    <input type="radio" name="gender" id="male" value="male">
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female">
                    <label for="female">Female</label>
                    <br><br>
                    <button>Submit</button>
                </form>
            </body>
            </html>
            
            `)
    } else if (req.url.toLocaleLowerCase() === '/submit-details' && req.method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })


        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            // console.log(fullBody);

            // convert data into objects

            const params = new URLSearchParams(fullBody);
            // const bodyObj = {};
            // for(const [key, value] of params.entries()){
            //     bodyObj[key] = value;

            // }
            // console.log(bodyObj);

            const objectBody = Object.fromEntries(params);

            console.log(objectBody);
            
            // writing the object data into file 
            
            let fileName = 'details.txt';
            fs.writeFileSync(fileName, JSON.stringify(objectBody))
            console.log(`Data saved successfully to file ${fileName}.`)

            
        


        })

        res.setHeader('location', '/');
        res.statusCode = 302;
        res.end();


    }

})

const PORT = 3000;

server.listen(PORT, () => console.log('server is listening at 3000 port.'))