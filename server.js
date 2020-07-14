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
// sendEmail(process.env.REACT_APP_GMAIL, process.env.REACT_APP_PASSWORD, "hello");

app.listen(PORT, () =>{
    console.log("App listening on: http://localhost:" + PORT);
});