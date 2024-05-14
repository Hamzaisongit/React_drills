import React, { useContext } from "react";
import { Context1,Context2 } from "./ComA";

const ComC = ()=>{

    const val1 = useContext(Context1);
    const val2 = useContext(Context2);

    return(
        <>
        <h1>Hey Hamza {val1} {val2}</h1>

        </>
    )
}

export default ComC;