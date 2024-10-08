/** summary
useEffect offers three main functionalities (which was previously done through lifecycle methods)
- it will run a code when the component mounts for the first time
- it will run a code when specific value called dependency changes between rerenders, if dependency not specified then run code on every rerender of component
- it will run a clean-up code when dependecy changes, to windup processes that were going on for the previous dependency value**/


import React,{useEffect,useState} from "react";

export default function UseEffect(){
    const [currentReq, setCurrentReq] = useState('posts')    
const [currentDisplay, setCurrentDisplay] = useState([])
const [windowSize, setWindowSize] = useState(window.innerWidth)

useEffect(()=>{
    console.log('this ran')
    fetch('https://jsonplaceholder.typicode.com/' + `${currentReq}`)
      .then(response => response.json())
      .then(json => setCurrentDisplay(json))
},[currentReq])  

useEffect(()=>{
    window.addEventListener('resize',()=>{setWindowSize(window.innerWidth)})
    return ()=>{
        console.log("window.innerWidth dependency changed")
    }
},[window.innerWidth])

    return(
        <>
            <h1>React works</h1>
            <button onClick={()=>{setCurrentReq('photos')}}>photos</button>
            <button onClick={()=> setCurrentReq('posts')}>posts</button>
            <button onClick={()=> setCurrentReq('users')}>users</button>
            <h1>current display value is : {currentReq} <br></br> current window size is {windowSize}px</h1>
            {currentDisplay.map((item)=>{
                return <pre>{JSON.stringify(item)}</pre>
            })}
            
        </>
    )
}