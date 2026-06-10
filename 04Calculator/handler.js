const fs = require('fs');


const sumHandler = require("./addition")

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
  } else if(req.url.toLowerCase() === '/calculator'){
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
  } else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){

    sumHandler(req, res);



    
    
  } else {
    return res.end(
        `
          <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>

    <style>
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family: Arial, sans-serif;
        }

        body{
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            background:linear-gradient(135deg,#0f172a,#1e293b,#334155);
            color:white;
        }

        .container{
            text-align:center;
            padding:40px;
        }

        h1{
            font-size:120px;
            color:#38bdf8;
            text-shadow:0 0 20px rgba(56,189,248,0.6);
        }

        h2{
            font-size:32px;
            margin-bottom:15px;
        }

        p{
            color:#cbd5e1;
            margin-bottom:30px;
            font-size:18px;
        }

        a{
            display:inline-block;
            text-decoration:none;
            background:#38bdf8;
            color:#0f172a;
            padding:12px 25px;
            border-radius:8px;
            font-weight:bold;
            transition:0.3s;
        }

        a:hover{
            background:white;
            transform:translateY(-3px);
        }

        .emoji{
            font-size:60px;
            margin-bottom:20px;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="emoji">🚫</div>
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
            The page you're looking for doesn't exist or has been moved.
        </p>

        <a href="/">Go Back Home</a>
    </div>

</body>
</html>
          
        `)
  }
}

module.exports = reqHandler;