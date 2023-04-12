import React from "react";
import ContactList from "../contactList/ContactList";
import ContactForm from "../contactInfo/ContactForm";
import { useState } from "react";

const Contact= ()=>{
    const [allcontacts,setAllontacts] = useState([  ])

    const contacts = (details)=>{
        setAllontacts(details)

    }
    return (
        <div>
            
            <ContactList allcontacts={allcontacts}/>
            <ContactForm contacts={contacts} />
        </div>
    )
}

export default Contact