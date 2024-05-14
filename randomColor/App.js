import React from "react";
import { useState } from "react";

const buttonStyle = {
    padding : '15px',
    border : 'none',
    borderRadius : '10px',
    background : 'grey'
}

const colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];


const App = ()=>{

    const [clr,setClr] = useState('#000000');

    const click = ()=>{
        let str = "#";
        for(let i=1;i<=6;i++){
            str+=colors[Math.floor(Math.random()*colors.length)];
            setClr(str);
        }

        console.log(str);
        console.log(clr);    }

    return(
        <>
        
        <div style={{height:'100%', width:'100%', background:`${clr}`}}>
        <button onClick={click} style={buttonStyle} >{clr}</button>
        
        </div>
            
        </>
    )
}

export default App; 