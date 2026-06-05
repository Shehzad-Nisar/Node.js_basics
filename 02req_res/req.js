const http = require('http');

const server = http.createServer((req,res)=>{

    res.setHeader("Content-Type" , "text/html");

    if(req.url === '/'){
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
    } 
    if(req.url.toLowerCase === '/submit-details' && req.method == 'POST'  ){
        return res.end(`
            <h1> Your details are submited... </h1>
            <h2> Thanks you so much. </h2>
            
            `)
    }

    


    
})

const PORT = 3001;

server.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}.`)
})