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
        <div className='contact'>
            <div className="contact-form container mt-5" id='contact'>
                <h2>Contact Me</h2>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control mt-3"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control mt-3"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="4"
                    ></textarea>
                </div>
                <button
                    className="btn btn-primary mt-3"
                    onClick={handleSubmit}
                >Submit</button>
            </div>
        </div>
    );
}

export default Contact;
