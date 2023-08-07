import React from 'react';
import './ContactCard.css'




const ContactCard = ({ contact, onDelete }) => {
    const handleDelete = () => {
        onDelete(contact.id);
    }
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
                <div className='contact-delete'>
                    <button onClick={handleDelete} className="button" >Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;