import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { clearAll } from "../actions/contactAction";
import { cancel } from "../actions/contactAction";

const ContactList =(props)=>{
    const dispatch = useDispatch()


    const contact = useSelector(state=>{
        return state.contacts
      })
      
    const handleClearAll =()=>{
        dispatch(clearAll())

    }

    const handleCancel=(ele)=>{
        const updatedList = contact.filter(c=>{
            return c!=ele
        })
        dispatch(cancel(updatedList))

        console.log(updatedList)
    }

    


    return (
        <>
        <h1>Contact List</h1>
        <input type="text" placeholder="search" />

        <ul> 
            {
                contact.map(ele=>{
                    return (
                    <li key={ele.id}>{ele.name} - {ele.number}  <button onClick={()=>{handleCancel(ele)}}>Cancel</button></li>
                    )
                })
            }
        </ul>

        <button onClick={handleClearAll}>Clear all</button>
        </>
    )
}

export default ContactList