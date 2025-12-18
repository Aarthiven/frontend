import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../api";

const AddStudent=()=>
{

    const[name,setname]=useState(""); 
    const[email,setemail]=useState("");
    const navigate=useNavigate();


    const submit = async(e)=>
    {
        e.preventDefault();
        await createStudent({name,email})
        navigate("/");
    }
    
    return (
        <>
        <h1>Add student is created</h1>
        <form onSubmit={submit}>
            <label>Name</label>
            <input required 
                value ={name} onChange={(e=>setname(e.target.value))}/>
             <label>Email</label> 
             <input required  
                value={email} onChange={(e=>setemail(e.target.value))}/>
             <button type="submit">Save</button>     

        </form>
        </>

    )
}
export default AddStudent;