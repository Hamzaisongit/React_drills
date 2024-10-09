import {React, useEffect, useState} from 'react'

export default function WithoutUseMemo(){
    const [input, setInput] = useState('')
    const [refInput, setRefInput] = useState('')
    const [theme, setTheme] = useState('white')      

const slowFunction = (num)=>{
    for(let i=0; i<=2000000000;i++){}
    return num%2
}    

const refValue = slowFunction(parseInt(refInput))
    return(
        <>
        <div style={{background:theme, height:'50vh', width:'50%', border:'2px solid red'}}>

        <input value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
           <button onClick={()=>{
            setRefInput(input)
            console.log(input)
            if(!refValue){
                setTheme((prev)=>{
                    return prev=='white'?'black':'white'
                })
            }
           }}>enter even no. and click here to toggle theme</button>
           <h1 style={{color:theme=='white'?'black':'white'}}>without useMemo</h1>
        </div>
           
        </>
    )
}