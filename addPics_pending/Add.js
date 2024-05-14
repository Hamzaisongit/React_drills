import React, { createContext, useState } from "react";
import {data} from './data'
import Body from './Body'

const Context = createContext()

const Add = ()=>{
const [img,setImg] = useState("");
const [title,setTitle] = useState("");
const [data2, setData2] = useState(data);


const add = ()=>{
    console.log(data2)
   setData2((p)=>{
     p.push({id:2, title:title, img:img})
     return p;
   })
}

const change = (e)=>{
    if(e.target.name == "img"){
        setImg(e.target.value);
    }else{
        setTitle(e.target.value);
    }
}

    return(
        <>
           
               <Body value={data2}></Body>
           

           <input id="i1" type="text" name="img" value={img} onChange={change}></input>
           <input id="i2" type="text" name="title" value={title} onChange={change}></input>
           <button onClick={add}>add</button>
        </>
    )
}

export default Add;
export {Context};