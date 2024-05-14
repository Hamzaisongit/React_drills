import React from "react";
import Box from './Box';
import { useState } from "react";

let x = 0;

const App = ()=>{

    const [cnt,setCnt] = useState(0);

    function clck(){
        x++;
        console.log(x);
        setCnt(x);
    }

    return(
        <>
            <Box click={clck} count={cnt}></Box>
        </>
    )
}

export default App;