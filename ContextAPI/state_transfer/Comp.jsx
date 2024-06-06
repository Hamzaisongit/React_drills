import React, { useContext, useEffect, useState } from "react";
import { Context } from "./App";

const Comp = ()=>{

window.alert("rerendered");

    const val = useContext(Context);
    
    useEffect(()=>{
        console.log("use effect"+ " " + val);
    })


    return(
        <>

  <button
    type="button"
    class=" block m-auto mt-8 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Button text {val}
  </button>

        </>
    )
}

export default Comp;