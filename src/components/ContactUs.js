import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
    render() {
        return (
            <form>
                <input className="contact-email" type="text" placeholder="Email" required/>
                <textarea className="contact-message" type="text" placeholder="Message" required/>
                <button className="contact-button">SEND</button>
            </form>
        );
    }
}

export default Contact;