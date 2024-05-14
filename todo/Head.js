import React, { useRef, useState } from "react";
import Body from "./Body";

const Box = (id, no, task)=>{
    return {id, no , task}
}

const Head = ()=>{

const [data,setData] = useState([]); 

let key = useRef(1);

const create = ()=>{
   
   setBoxName("");

   setData((p)=>{
    p.push(Box(key.current-1,key.current,boxName));
    return p;
   })
   key.current = key.current + 1;
   console.log(data,key.current);
}

const remove = (e)=>{
   const x = parseInt(e.target.id);
   setData((p)=>{
   return (p.filter((e)=>{
        return x !== e.id;
    }))
   })
}

const [boxName, setBoxName] = useState("");

const type = (e)=>{
    setBoxName(e.target.value);
}

    return(
        <>
            <input className="name" type="text" name="name" value={boxName} onChange={type}></input>
            <button className="create" onClick={create}>create</button>
            <div className="body" style={{ height:'200px', width:'200px', display:'flex', flexDirection:'column', alignItems:'center'}}>
                {data.map((e)=>{
                    const {id,task} = e;
                    return(
                        <Body remove={remove} k={id} task={task}></Body>
                    )
                })}
            </div>
        </>
    )
}

export {Head};