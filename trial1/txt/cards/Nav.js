import React from "react";

const navStyle = {
    display : 'flex',
    justifyContent : 'space-between',
    color : 'white',
    fontWwight : 'bold',
    background : 'black'
}

const linkStyle = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width : '60%'
}

const searchComb = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '300px',
}

const searchStyle = {
    height: '30px',
    width: '200px',
    border: '1px solid gray',
    borderRadius: '5px',
}

const buttonStyle = {
    height: '30px',
    border: '1px solid gray',
    borderRadius: '5px',
}

const Nav = ()=>{
    return(
        <>
        <div className="nav" style={navStyle}>
            <ul className="links" style={linkStyle}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Catalouge</li>
                <li>Checkout</li>
            </ul>
            <div style={searchComb}>
            <input type="search" style={searchStyle} defaultValue={"search"}></input>
            <button style={buttonStyle}>search</button>
            </div>
            
        </div>
        </>

    )
}

export default Nav;