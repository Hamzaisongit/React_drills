// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeTodo } from "./feature/todo/todoSlice";

// const Todo = ()=>{

// const todos = useSelector(state=>state.todos)
// const dispatch = useDispatch()

// const removeTodoHandler = (e)=>{
//     dispatch(removeTodo(e.target.parent.key))
// }

//     return(
//         <>
// <ul class="list-group">
//   {/* <li class="list-group-item">An item</li> */}
//   {
//     todos.map((todo)=>{
//         return <li class="list-group-item" key={todo.id}>{todo.text} <button onClick={removeTodoHandler}>-</button></li>
//     })
//   }
// </ul>
//         </>
//     )
// }

// export default Todo;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./feature/todo/todoSlice";

const Todo = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const removeTodoHandler = (id) => {
    console.log(todos)
    dispatch(removeTodo(id));
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '20px auto',
      fontFamily: 'Arial, sans-serif',
    },
    ul: {
      listStyleType: 'none',
      padding: 0,
    },
    li: {
      backgroundColor: '#f0f0f0',
      margin: '10px 0',
      padding: '10px',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      opacity: '1',
      transition: 'opacity 0.5s ease'
    },
    button: {
      backgroundColor: '#ff4d4d',
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '3px',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Todo List</h2>
      <ul style={styles.ul}>
        {todos.map((todo) => {
          return (
          <li key={todo.id} style={styles.li}>
            <span>{todo.text}</span>
            <button 
              style={styles.button} 
              onClick={() => removeTodoHandler(todo.id)}
            >
              Remove
            </button>
          </li>)
        })}
      </ul>
    </div>
  );
};

export default Todo;