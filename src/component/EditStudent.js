import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStudent1, updateStudent } from "../api";

const EditStudent=()=>
{

    const{id}=useParams();
    const [student,setStudents]=useState({name:"",email:""});
    const navigate=useNavigate();
    useEffect(()=>
    {
       getStudent1(id).then(res=>setStudents(res.data));
    },[id]);

    const submit=async(e)=>
    {
        e.preventDefault();
        await updateStudent(id,student);
        navigate("/");
    }
    return (
        <>
        <h1>Edit  is created</h1>
        <form onSubmit={submit}>
            <label>Name</label>
            <input value={student.name}
            onChange={e=>setStudents({...student,name:e.target.value})}/>

            <label>Email</label> 
            <input value={student.email}
            onChange={e=>setStudents({...student,email:e.target.value})}/>
            <button>Update</button> 
        </form>
        
        </>

        
    )
}
export default EditStudent;