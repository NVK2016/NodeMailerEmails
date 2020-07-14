//Backend seettings 
const express = require("express"); 
const { sendEmail } = require("./nodemail");

// create an Express app
const app = express();

// set the port of the application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 5001;

// set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/sendMail", (req,res) =>{
  console.log("Server ", req.body);  
  //SEND EMAIL 
  sendEmail(req.body.email, req.body.name, "hello")
})

//TESTING PURPOSE 
for ( var i =0 ; i <= 25  ; i++){
  sendEmail(process.env.REACT_APP_GMAIL, "Mr.X "  , "hello");
}

// for ( var i =0 ; i <= 5 ; i++){
  sendEmail(process.env.REACT_APP_GMAIL, "Ms. Cindrella - ", "thanks");
// }

sendEmail(process.env.REACT_APP_GMAIL, "Mr. Nobody", "");

app.listen(PORT, () =>{
    console.log("App listening on: http://localhost:" + PORT);
});