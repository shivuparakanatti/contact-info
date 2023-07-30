import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { clearAll } from "../actions/contactAction";
import { cancel } from "../actions/contactAction";


const ContactList =(props)=>{
    const dispatch = useDispatch()

    const [outputSearch, setOutputSearch] = useState()

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

    }

    const handleSearch=(e)=>{
        const searchItem = e.target.value

        const searchList = contact.filter(ele=>{
            return ele.name.includes(searchItem)
        })

        setOutputSearch(searchList)      
    }

    return (
        <>
        <h1>Contact List</h1>
        <input type="search" placeholder="search" onChange={handleSearch}/>

        <ul className="contactList"> 
        {
         outputSearch ? (
            outputSearch.map(ele=>{

               return <li key={ele.id}>{ele.name} - {ele.number}  <button onClick={()=>{handleCancel(ele)}}>Cancel</button></li>
            })
         ):(
            contact.map(ele=>{
                return (
                <li key={ele.id}>{ele.name} - {ele.number}  <button onClick={()=>{handleCancel(ele)}}>Cancel</button></li>
                )
            })
         )
        }
         
        </ul>

        <button onClick={handleClearAll}>Clear all</button>

        </>
    )
}

export default ContactList