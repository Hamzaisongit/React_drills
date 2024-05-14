import React, { useState } from "react";

let time = new Date().toLocaleTimeString();


const Box = ()=>{
 
    const [tim,setTim] = useState(time)

    const updateTime = ()=>{
        time = new Date().toLocaleTimeString() 
        setTim(time);
    }

    setInterval(()=>{
        updateTime();
        console.log(tim)
    },1000)

    return(
        <>
            <div>
                <p> 
                    <i>Time is </i>
                    {tim}
                </p>
            </div>
        </>
    )
}

export default Box;