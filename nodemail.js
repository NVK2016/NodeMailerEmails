const nodeMailer = require("nodemailer");
require("dotenv").config();

//Load Templates 
const { Hello } = require("./hello_template");
const { Thanks } = require("./thanks_template");

//Step1 
const sendEmail = (to, name, type) => {
    const smtpTransport = nodeMailer.createTransport({
        // service: "Gmail",
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.REACT_APP_GMAIL,
            pass: process.env.REACT_APP_PASSWORD
        }
    });
    // console.log(smtpTransport, "smtpInfo")
    smtpTransport.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take messages');
        }
    });

    const mail = getEmailData(to, name, type);
    console.log()
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

    switch (template) {
        case "hello":
            mailData = {
                from: "Spongebob Square Pants<sponge@gmail.com>",
                to: `${to}`,
                subject: `Hello ${name}`,
                html: Hello()
            }
            break;
        case "thanks":
            mailData = {
                from: "Spongebob Square Pants<sponge@gmail.com>",
                to: `${to}`,
                subject: `Hello ${name}`,
                html: Thanks()
            }
            break;
        default:
            mailData = {
                from: "Spongebob Square Pants<sponge@gmail.com>",
                to: `${to}`,
                subject: `Hello ${name} - Default option`,
                html: Hello()
            }
            break;
    }
    return mailData;
}


module.exports = { sendEmail }; 