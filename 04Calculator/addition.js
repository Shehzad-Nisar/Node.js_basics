
const fs = require('fs')
const sumHandler = (req, res) =>{
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
    
            const result = Number(bodyObject.num1) + Number(bodyObject.num2);
    
            //saved to the file as well as :
    
            fs.writeFile("result.txt", `Number1: ${bodyObject.num1} + Number2: ${bodyObject.num2} = Result: ${result}`, 
                
                (err)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("saved successfully.")
                    }
    
            })
    
            
        return res.end(`
            <h1>Result</h1>
            <h2> Addition of ${bodyObject.num1} and ${bodyObject.num2} is equal to <b> ${result} </b> </h2>
            `)   
        })
            
        //console.log("hello from india")

}

module.exports = sumHandler;