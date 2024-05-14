import React, { createContext } from "react";
import ComB from "./ComB"
import ComB1 from "./ComB1"

const Context1 = createContext();
const Context2 = createContext();

const ComA = ()=>{
    return(
        <>
        <Context2.Provider value={'Ravani'}>
        <Context1.Provider value={"memon"}>
        <ComB></ComB>
        <ComB1></ComB1>
        </Context1.Provider> 
        </Context2.Provider>
        </>
    )
}

export {Context1,Context2}
export default ComA;