import React from 'react';
import './ContactCard.css'


const ContactCard = ({ contact }) => {
    return (
        <div className="contact-display">
            <div className="contact-card">
                <div className="contact-name">
                    <h3>{contact.name}</h3>
                </div>
                <p>Phone: {contact.phone_number}</p>
                <p>Address: {contact.address}</p>
                <p>Latitude: {contact.latitude}</p>
                <p>Longitude: {contact.longitude}</p>
            </div>
        </div>
    );
};

export default ContactCard;