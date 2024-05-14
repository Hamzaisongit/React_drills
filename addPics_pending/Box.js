import React from "react";

const boxStyle = {

}

const Box = ({title, img})=>{
    return(
        <>
           <div style={boxStyle}>
             <span><img src={img}></img></span>
             <p style={{textAlign:'center'}}>{title}</p>
           </div>
        </>
    )
}

export default Box;