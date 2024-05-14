import React from "react";


const App = ()=>{

const submit = ()=>{
   const txt = document.getElementById('txt').value; // just directly acsessing the value of 'value' from the dom 
   alert(txt);
}

  return(
    <>
        <form onSubmit={submit}>

            <input id="txt" type="text" name="name" placeholder="enter name" value={'hi'}></input>
            {/* here the default value will be hi and no issues when we want to enter something,
             since no involvement of state in this one  */}

            <button type="submit">submit</button>
            {/* type means the functionality */}
        </form>
    </>
  )
}

export default App;