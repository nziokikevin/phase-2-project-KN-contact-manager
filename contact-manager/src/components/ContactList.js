import React from "react";
import ContactCard from "./ContactCard";

function ContactList({contacts}){
    //console.log(contact)
    const displayContactList = contacts.map((contact) => {
        return(
            <ContactCard contact={contact}/>
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