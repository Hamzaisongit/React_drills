import React from "react";


const Body = ({k,task,remove})=>{

return(
    <>
         <div style={{marginTop:'10px'}}> {k} : {task} 
         <button id={`${k}`} className="rmv" onClick={remove}>remove</button>
         </div>
    </>
)

    // return(
    //     <>
    //         <div className="body">
    //             {data.map((e)=>{
    //                 const {key,task} = e;
    //                 return(
    //                     <>
    //                         <div>
    //                             {key} : {task}
    //                         </div>
    //                     </>
    //                 )
    //             })}
    //         </div>
    //     </>
    // )
}

export default Body;