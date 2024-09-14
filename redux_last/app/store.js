import {configureStore} from '@reduxjs/toolkit'
import todoRducer from '../feature/todo/todoSlice'

export const store = configureStore({
    reducer: todoRducer

})