import React, { useMemo, useState } from "react";

export default function UseMemo(){

const [counter, setCounter] = useState(0)
const slowfunction = ()=>{
    const arr = []
    for(let i=0;i<=20000000;i++){
       arr[i]=i
    }
    return arr
}

const indexValue1 = useMemo(slowfunction().find((item)=>item==19999998))

    return(
        <>
<h1>Counter: {counter}</h1>
        <button onClick={()=>{
            console.log('hi')
            setCounter(counter+1)}}>click</button>
        <h1>indexValue:{indexValue1}</h1>

        </>
    )
}