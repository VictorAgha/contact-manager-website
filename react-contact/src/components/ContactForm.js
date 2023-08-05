import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        address: '',
        latitude: '',
        longitude: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the form data to the API endpoint to save the contact
        fetch('http://localhost:8000/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Optionally handle the response data, update the state, etc.
                console.log('Contact saved successfully:', data);
            })
            .catch((error) => console.error('Error saving contact:', error));
    };

    return (
        <div className="contact-form">
            <h2>Add New Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div>
                    <label>Latitude:</label>
                    <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} required />
                </div>
                <div>
                    <label>Longitude:</label>
                    <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} required />
                </div>
                <button type="submit">Save Contact</button>
            </form>
        </div>
    );
};

export default ContactForm;