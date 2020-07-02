const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const nodemailer = require("nodemailer");
const db=require('./query');
const path = require('path');
var cors = require('cors');
const app=express();
// const port=3333;
const port = process.env.PORT || 3333;
// app.use(raorigin: "*" }));
app.use(cors());
// app.use(ra origin: "*" );
app.use(bodyparser.json());
app.use(
    bodyparser.urlencoded({
        extended:true,
    })
);

app.post('/addsignup',db.addsignup);
app.post('/addbusiness',db.addbusiness);
app.get('/getsignup',db.getsignup);

app.post('/adddetails',db.adddetails);
app.get('/getdetails',db.getdetails);
app.post('/getlogin',db.getlogin);
app.post('/getbusinessbyid/:sid',db.getbusinessbyid);
app.get('/getsignupbyid/:sid',db.getsignupbyid);
app.get('/getdetailsbyid/:sid',db.getdetailsbyid);

app.delete('/deletebusiness/:sid',db.deletebusiness);
app.delete('/deletesignup/:sid',db.deletesignup);
app.delete('/deletedetails/:sid',db.deletedetails);

app.put('/updatebusiness',db.updatebusiness);
app.put('/updatesignup',db.updatesignup);
app.put('/updatedetails',db.updatedetails);

app.get('/',(request,response)=>{
    response.json({info:'Node.js,Express, and Postgres API'});
});
app.listen(port,()=>{
    console.log(`App running on port ${port}.`);
})