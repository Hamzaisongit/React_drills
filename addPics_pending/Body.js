import React, { useState } from "react";
import Box from './Box';
import Add from './Add' ;
import { Context } from "./Add";

const bodyStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: '100px',
}

const Body = ({value})=>{

// const [data2, setData2] = useState(data);

// const func = ()=>{
//     setData2((p)=>{
//         p.push({id:2, title:})
//     })
// }

    return(
        <>
        <div className="body" style={bodyStyle}>
                
            {value.map((e)=>{
            return(
                <Box title={e.title} img={e.img}></Box>
            )})}
                
            
        </div>
        </>
    )

}

export default Body;