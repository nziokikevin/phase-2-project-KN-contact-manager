import React from "react";

function ContactCard({contact}){
    const {name, email} = contact;
    return(
        <div className="item">
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
    </div>
    )
}

export default ContactCard;