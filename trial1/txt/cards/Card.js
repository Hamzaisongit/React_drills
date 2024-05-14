import React from "react";

const cardStyle = {
    height : '235px',
    width : 'fit-content',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-betweem',
    background : 'rgb(0 0 0 / 24%)',
    padding : '10px',
    borderRadius : '10px'
}

const imgStyle = {
    height: '200px',
    width: '160px',
    borderRadius: '20px',
    objectFit: 'cover',
}

const Card = ({title,img})=>{
    return(
        <>
            <div className="card" style={cardStyle}>
                <div style={{height:'fit-content', width:'fit-content'}}>
                    <img src={img} style={imgStyle}></img>
                </div>
                <span style={{fontWeight:'bold', fontFamily:"Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif", fontSize:'20px'}}>{title}</span>
            </div>
        </>
    )
}

export default Card;