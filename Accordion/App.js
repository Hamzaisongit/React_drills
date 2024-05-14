import React from "react";
import data from "./data";
import Box from "./Box";
import './App.css';

const contStyle = {
    height: 'fit-content',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-between',
    alignItems : 'center'
}

const App = ()=>{
    return(
        <>
            <div style={contStyle} className="cont">
                {data.map((e)=>{
                   return <Box que = {e.que} ans = {e.ans}></Box>
                })}
            </div>
        </>
    )
}

export default App;