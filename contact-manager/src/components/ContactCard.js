import React from "react";

function ContactCard({id, name, email}){
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