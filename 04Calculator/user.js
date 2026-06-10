const fs = require('fs');

const reqHandler = (req, res)=>{

  if(req.url === '/'){
      return res.end(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Mini Calculator</title>
          </head>
          <body>
              <header><h1>Welcome to Mini Calculator.</h1></header>
               <a href="/calculator">Calculator</a>
              
          
          </body>
          </html>
          `)
  } else if(req.url === '/calculator'){
        return res.end(`
            <h1>Mini Calculator</h1>
            <br> <br>
            <form action="/calculate-result" method="POST">
               <label for = "num1">Number 1:</label>
               <input type="number" name="num1" placeholder="Enter num1" >
                <label for = "num2">Number 2:</label>
               <input type="number" name="num2" placeholder="Enter num2">
               <input type="submit" value="calculator">
       
            </form>
            `)
  } else if(req.url === '/calculate-result' && req.method === 'POST'){

    const body = [];
    req.on('data', (chunk)=>{
        body.push(chunk);
        //console.log(chunk);
    })

    req.on('end', ()=>{
        const fullBody = Buffer.concat(body).toString();
        //console.log(fullBody);

        const params = new URLSearchParams(fullBody);
        // console.log(params)

        const bodyObject = {};

        for(const [key , value] of params){
            bodyObject[key] = value;
            

        }
        //console.log("object obtained from params")
        //console.log(bodyObject);

        //console.log(bodyObject.num1 + bodyObject.num2);

        const sum = () =>{
            const add = Number(bodyObject.num1) + Number(bodyObject.num2);
            console.log(add);
        }
        sum();

        
        
    })
        

    
    return res.end(`
        <h1>Result</h1>
        `)
  }
}

module.exports = reqHandler;