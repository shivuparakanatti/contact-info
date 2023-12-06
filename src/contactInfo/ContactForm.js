import React from "react";
import { useState } from "react";
import { contact } from "../actions/contactAction";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const ContactForm = (props)=>{

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleForm = (e)=>{
        e.preventDefault()
        e.target.reset();
    }


    const handleNmae=(e)=>{
        const name = e.target.value
        setName(name)

    }
    
    const handleNumber=(e)=>{
        const number = e.target.value
        setNumber(number)
    }

    const handleSubmit=(e)=>{
        const contactDetails = {
            id:uuidv4(),
            name : name,
            number : number
        }
        dispatch(contact(contactDetails))
       
        


    }

  
    return (
        <form onSubmit={handleForm} className="contactForm">
            <h2>Contact Form</h2>
            <input type="text" placeholder="Name" onChange={handleNmae}/>
            <input type="number" placeholder="Number" onChange={handleNumber}/>
            <input type="submit" onClick={handleSubmit}/>
        </form>
    )
}

export default ContactForm