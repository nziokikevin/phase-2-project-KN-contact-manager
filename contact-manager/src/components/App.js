import React, {useState} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const[contacts, setContacts] = useState([]);
 

  function addContactForm(contact){
    setContacts([...contacts, contact]);
  };

  return (
    <div>
      <Header />
      <AddContact addContactForm={addContactForm} />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
