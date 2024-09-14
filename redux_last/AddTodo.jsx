import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { addTodo } from "./feature/todo/todoSlice";

const AddTodo = ()=>{

const [input, setInput] = useState("");
const dispatch = useDispatch()

const addTodoHandler = (e)=>{
     e.preventDefault()
     console.log(input)
     dispatch(addTodo(input))
     setInput('')
}

    return(
        <>
            <form onSubmit={addTodoHandler}>
                <input type="text" value={input} onChange={(e)=>{
                    setInput(e.target.value)
                }}/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default AddTodo;