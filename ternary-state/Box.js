import React from "react";

const boxStyle = {
    width: 'fit-content',
    height: 'fit-content',
    margin: 'auto',
    marginTop: '300px',
    fontFamily: 'system-ui',
}

const buttonStyle = {
    width: 'fit-content',
    marginLeft: '16px'
}

const Box = ({click,count})=>{
    return(
        <>
            <div style={boxStyle}>
            <p>this is <span>{count%2==0?'even':'odd'}</span></p>
            <button onClick={click} style={buttonStyle}>click</button>
            </div>
            
        </>
    )
}

export default Box;