import React from "react";

const boxStyle = {
    margin: 'auto',
    fontSize: '30px',
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    height: 'fit-content',
    width: 'fit-content',
    padding: '15px 15px'
}

const Box = ({txt})=>{
    return(
        <div className="box" style={boxStyle}>{txt}</div>
    )
}

export default Box;