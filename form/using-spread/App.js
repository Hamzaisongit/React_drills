import React from "react";
import { useState } from "react";

const fStyle = {
    width : '200px',
    height : '250px',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-between',
    alignItems : 'center'
}

const App = ()=>{

    // const [fname,setFname] = useState();
    // const [lname,setLname] = useState();

    // const fchange = (e)=>{
    //     setFname(e.target.value);
    // }

    // const lchange = (e)=>{
    //     setLname(e.target.value);
    // }

    const [fullName, setFullName] = useState({
        fname : '',
        lname : ''
    });

    const change = (e)=>{
        
      setFullName((p)=>{
         return {
            ...p,
            [e.target.name] : e.target.value 
            // here the square brackets allo us to use the string of name property of the target obj into a key,
            // which will overwrite the existing key of the previous obj
            // so main thing is it overwrites upon the previous object
         }
      })
    }

    return(
        <>
            <form style={fStyle} onSubmit={(e)=>{
                    // e.preventDefault();
                }}>
                <h1>Form {fullName.fname} {fullName.lname}</h1>
                <input type="text" placeholder="fname" name="fname" value={fullName.fname} onChange={change}></input>
                <input type="text" placeholder="lname" name="lname" value={fullName.lname} onChange={change}></input>
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export default App;