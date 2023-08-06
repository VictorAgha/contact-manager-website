import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css'

const App = () => {
  return (
    <div>
      <h1 id='title'>Contact Manager Website</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
