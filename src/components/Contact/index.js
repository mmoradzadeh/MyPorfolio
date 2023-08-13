import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        const mailtoLink = `mailto:morad97mm@gmail.com?subject=Message from ${name} (${email})&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    }

    return (
        <div className="contact-form" id='contact'>
            <h2>Contact Me</h2>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="email" 
                className="form-control" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea 
                className="form-control" 
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button 
                className="btn btn-primary mt-3"
                onClick={handleSubmit}
            >Submit</button>
        </div>
    );
}

export default Contact;
