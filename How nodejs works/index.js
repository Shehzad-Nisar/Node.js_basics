const fs = require('fs');

setTimeout(()=> console.log("hello from settimeout 1"),0);

setImmediate(()=>console.log("hello from setimmediate fn 1"));

fs.readFile("sample.txt", "utf-8" , ()=>{
    console.log("IO polling finished.");

    setTimeout(() => console.log("hello from timer 2"), 0);
    setTimeout(() => console.log("hello from timer 3"), 5*1000);
    setImmediate(()=>console.log("hello from immediate fn 2"));
})
console.log("hello from top level code ")