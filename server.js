const express = require ('express');
const path = require ('path');
const app = express();
const student =require('./Student');
const studentFiltre=require('./studentFiltre')
// const studentFiltre =(res,req,next)=>{
// console.log("hello")
// next();
// }
app.use(studentFiltre)

app.use(express.static(path.join(__dirname,"public")));
// const student=[
//     {
//         id:1,
//         name:"bilel",
//         age:18,
//     },

//     {
//         id:2,
//         name:"cadha",
//         age:9
//     },
//     {
//         id:3,
//         name:"zahra",
//         age:20,
//     },

//     {
//         id:4,
//         name:"lela",
//         age:25,
//     }
// ];
//Get all student
// app.get("/student",(req,res)=>{
//     res.send(student)
// })
// // Get only 1 student
//  app.get("/student/:id",(req,res)=>{
//      res.json(student.filter(
//          (el)=>
//              el.id=== parseInt(req.params.id)
         
//      )
//      )
//      });

app.use(dete=(req,res,next)=>{
    var objetdate= new Date() ;
    var hours=objetdate.gethours();
    var day =objetdate.getday();
    if (day>1 && day<7 && hours>=9 && hours <=17) {
        return next();
    } else {
      return  res.send("we are closed")
    }
    
})
const port=5000;
app.listen(5000,(err)=> err ? console.log ("error") : console.log(`server is running on port ${port} `));
