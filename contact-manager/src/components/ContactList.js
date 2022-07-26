import React from "react";
import ContactCard from "./ContactCard";

function ContactList({contacts}){
    const displayContactList = contacts.map((contact) => {
        return(
            <ContactCard id={contact.id} name={contact.name} email={contact.email}/>
        )
    })
    return(
        <div className="">
            <h2>Contact List</h2>
            {displayContactList}
        </div>
    )
}

export default ContactList;