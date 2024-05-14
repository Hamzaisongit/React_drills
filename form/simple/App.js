import React, { useState } from "react";
import './App.css'



const App = ()=>{
    
    const [name,setName] = useState("")
    const[hed,setHed] = useState("")

    const change = (event)=>{
        setName(event.target.value);
        setHed(event.target.value);
    }

    const submit = (event)=>{
        event.preventDefault();
        console.log('hiii')
    }

    return(
        <>
        <form onSubmit={submit}>
           <div className="cont">
           <h1>Form {hed}</h1> 
           <input type="text" placeholder="name" onChange={change} value={name}></input>
           <button type="submit">Submit</button>
           </div>
        </form>

           
          
        </>
    )
}

export default App;