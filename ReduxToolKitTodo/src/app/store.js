// import configure store from redux tool kit which comes from core reduxx

import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const  store = configureStore({
    reducer : todoReducer
})