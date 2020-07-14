const nodemailer = require("nodemailer");
require("dotenv").config();

//Step1 
const sendEmail = (to, name, type) => {
    const smtpTransport = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.REACT_APP_GMAIL,
            pass: process.env.REACT_APP_PASSWORD
        }
    });


    const mail = getEmailData(to, name, type);

    //Step 3 - Send email using NodeMailer Transport 

    smtpTransport.sendMail(mail, function (err, response) {
        if (err) { console.log(err); }
        else {
            console.log('Email successfully sent!');
            //Close SMTP 
            smtpTransport.close();
        }

    });
}

//STEP 2 - setting up email content 
const getEmailData = (to, name, template) => {
    let mailData = null;
    console.log("getEmailData", to, name, template)
    switch (template) {
        case "Hello":
            mailData = {
                from: "Spongebob Square Pants<sponge@gmail.com>",
                to,
                subject: `Hello ${name}`,
                html: Hello()
            }
            break;
        case "Thanks":
            mailData = {
                from: "Spongebob Square Pants<sponge@gmail.com>",
                to,
                subject: `Hello ${name}`,
                html: Thanks()
            }
            break;
        default:
            mailData;
    }
    return mailData;
}


module.exports = { sendEmail }; 