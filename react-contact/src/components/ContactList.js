import React, { useState, useEffect } from 'react';
import ContactCard from './ContactCard';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/contacts')
            .then((response) => response.json())
            .then((data) => setContacts(data))
            .catch((error) => console.error('Error fetching contacts:', error));
    }, []);

    const handleDeleteContact = (contactId) => {
        fetch(`http://localhost:8000/api/contacts/${contactId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
            })
            .catch((error) => console.error('Error deleting contact:', error));
    }

    return (
        <div className="contact-list">
            <div className="contact-title">
                <h2>Contact List</h2>
            </div>
            <div className="contact-list1">
                {contacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} onDelete={handleDeleteContact} />
                ))}
            </div>
        </div>
    );
};

export default ContactList;