import React from "react";

const navStyle = {
    height: '40px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
}

const Nav = ()=>{
    return(
        <>
            <div className="nav" style={navStyle}>
                <a>link 1</a>
                <a>link 2</a>
                <a>link 3</a>
                <a>link 4</a>
            </div>
        </>
    )
}

export default Nav;