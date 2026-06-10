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
        


    return res.end(`
        <h1>Result</h1>
        `)
  }
}

module.exports = reqHandler;