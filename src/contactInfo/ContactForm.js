import React from "react";
import { useState } from "react";
import { contact } from "../actions/contactAction";
import { useDispatch } from "react-redux";


const ContactForm = (props)=>{

    const dispatch = useDispatch()

    const contacts=props.contacts

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    let allContacts =[]

    const handleForm = (e)=>{
        e.preventDefault()
        
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
            name : name,
            number : number
        }
        dispatch(contact(contactDetails))

       

    }

  
    return (
        <form onClick={handleForm} className="contactForm">
            <input type="text" placeholder="Name" onChange={handleNmae}/>
            <input type="number" placeholder="Number" onChange={handleNumber}/>
            <input type="submit" onClick={handleSubmit}/>
        </form>
    )
}

export default ContactForm