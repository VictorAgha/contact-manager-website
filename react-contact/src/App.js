import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div>
      <h1>Contact Manager Website</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
