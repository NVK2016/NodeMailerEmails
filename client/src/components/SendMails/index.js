import React, { useState } from 'react';
import {
    Button,
    Container,
    Header,
    Form , Label    
} from 'semantic-ui-react';

import axios from 'axios';

const style = {
    h1: {
        marginTop: '3em',
    },
    h2: {
        margin: '4em 0em 2em',
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    last: {
        marginBottom: '300px',
    },
}


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
            name, email, message
        }
        console.log("dataSubmit", dataSubmit);
        //Send data to Backend 
        axios.post("http://localhost:5001/api/sendMail", dataSubmit);
    }
    return (
        <Container>
            <Header as='h1' content='Node mailer Setup SMTP' style={style.h1} textAlign='center' />
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field >
                        <Label color='teal'>Name:</Label>
                        <input id="name" placeholder="Please enter Name" value={name} onChange={handleInputChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Email Address:</label><input id="email" placeholder="Please enter valid Email" value={email} onChange={handleInputChange} />
                    </Form.Field>
                    </Form.Group>
                    <Form.Field>
                        <label>Message:</label><textarea id="message" placeholder="Please enter a message" rows="4" value={message} onChange={handleInputChange} />
                    </Form.Field>
                
                <Button positive onClick={handleSubmit}>Send Email</Button>
            </Form>
        </Container>
    )
}
export default SendEmails;