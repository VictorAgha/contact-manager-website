import React, { useState } from 'react';
import './ContactForm.css'


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
        fetch('http://localhost:8000/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Contact saved successfully:', data);
            })
            .catch((error) => console.error('Error saving contact:', error));
    };

    return (
        <div className="contact-form">
            <h2>Add New Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required />
                </div>
                <div>

                    <input type="text" name="phone_number" placeholder='Phone' value={formData.phone_number} onChange={handleChange} required />
                </div>
                <div>
                    <input type="text" name="address" placeholder='Address' value={formData.address} onChange={handleChange} required />
                </div>
                <div>
                    <input type="text" name="latitude" placeholder='Latitude' value={formData.latitude} onChange={handleChange} required />
                </div>
                <div>
                    <input type="text" name="longitude" placeholder='Longitude' value={formData.longitude} onChange={handleChange} required />
                </div>
                <button type="submit" className="button">Save Contact</button>
            </form>
        </div>
    );
};

export default ContactForm;