//3.File Systems Module -->Helps to read and write file in node js
const fs=require("fs");
const path=require("path") //It helps to drag the accurate path for the file systems
fs.readFile(path.join(__dirname,'Files','Message.txt'),(err,data) =>{
    if(err) throw err;
    console.log(data);  //Byte code format
    console.log(data.toString());//Instead we use utf-8
}
)