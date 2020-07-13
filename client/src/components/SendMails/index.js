import React, { useState } from 'react';
import axios from 'axios';
//Tring to use Nodemailer and GMAIL 
function SendEmails() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {

        if (event.target.id === "name") {
            setName(event.target.value)
        } else if (event.target.id === "message") {
            setMessage(event.target.value)
        }
        else {
            setEmail(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const dataSubmit = {
            //name: name
            name, email
        }
        console.log(dataSubmit);
        //Send data to Backend 
        axios.post("/api/sendMail", dataSubmit);
    }
    return (
        <div>
            <h1>Node mailer Setup SMTP</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                Name: <input id="name" placeholder="Please enter Name" value={name} onChange={handleInputChange} />
                <br/>
                Email: <input id="email" placeholder="Please enter valid Email" value={email} onChange={handleInputChange} />
                <br/>
                Message: <textarea id="message" placeholder="Please enter a message" rows="4" value={message} onChange={handleInputChange} />
                <br/>
                <button onClick={handleSubmit}>Send Email</button>
            </form>
        </div>
    )
}
export default SendEmails;