import React from "react";
import Card from "./Card";
import books from './data/data'

const BodyStyle = {
    margin: 'auto',
    marginTop: '20px',
    padding: '30px',
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    columnGap: '15%',
    rowGap: '50px',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    background: '#eeeeee',
    borderRadius: '20px',
}

const Body = ()=>{
    return (
        <>
            <section>
                <div className="body" style={BodyStyle}>
                   {/* <Card></Card>
                   <Card></Card>
                   <Card></Card>
                   <Card></Card>
                   <Card></Card> */}
                {books.map((book)=>{
                    return(
                        <Card title={book.title} img={book.img}></Card>
                    )
                })}

                </div>
            </section>
        </>
    )
}

export default Body;