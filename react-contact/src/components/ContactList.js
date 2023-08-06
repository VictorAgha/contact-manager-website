import React, { useState, useEffect } from 'react';
import ContactCard from './ContactCard';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    // Fetch contacts from API using useEffect
    useEffect(() => {
        fetch('http://localhost:8000/api/contacts') // Update the API endpoint URL if needed
            .then((response) => response.json())
            .then((data) => setContacts(data))
            .catch((error) => console.error('Error fetching contacts:', error));
    }, []);

    return (
        <div className="contact-list">
            <div className="contact-title">
                <h2>Contact List</h2>
            </div>
            <div className="contact-list1">
                {contacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                ))}
            </div>
        </div>
    );
};

export default ContactList;