import React, { createContext, useContext, useState } from "react";
import Comp from "./Comp";
const Context = createContext(0);

const App = ()=>{

const [ctr, setCtr] = useState(0);

const click = ()=>{
    setCtr(ctr+1);
    console.log(Context);
}

    return(
        <>

<Context.Provider value={ctr}>
  <button
    type="button"
    class=" block m-auto mt-8 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  onClick={click}>
    Button text {ctr}
  </button>

<Comp></Comp>
</Context.Provider>


        </>
    )
}

export default App;
export {Context};