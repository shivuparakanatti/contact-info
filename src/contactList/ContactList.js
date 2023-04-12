import React from "react";
import { useSelector } from "react-redux";

const ContactList =(props)=>{

    const allContacts=props.allContacts

    console.log(allContacts)


    const contact = useSelector(state=>{
        return state.contacts
      })
      
      console.log(contact)


    return (
        <>
        <h1>Contact List</h1>
        <input type="text" placeholder="search" />
        </>
    )
}

export default ContactList