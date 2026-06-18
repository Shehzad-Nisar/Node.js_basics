const fs = require('fs');

console.log("1. start of the script.");

// blocking operations
console.log("2. reading file synchronously");
const dataSync = fs.readFileSync('name.txt', "utf-8");
console.log("3. Synchronously read file.")


// non blocking operations

 console.log("4. reading file asynchronously");
 fs.readFile('name.txt', 'utf-8', (err, dataSync)=>{
    if(err) throw err;
    else console.log("5.Asynchronously read file.")
 });

 console.log("6.end of script")
