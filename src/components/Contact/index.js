import React from 'react';

function Contact() {
    return (
        <div className="contact-form">
            <input type="text" className="form-control" placeholder="Name" />
            <input type="email" className="form-control" placeholder="Email" />
            <textarea className="form-control" placeholder="Message"></textarea>
            <button className="btn btn-primary mt-3">Submit</button>
        </div>
    );
}

export default Contact;
