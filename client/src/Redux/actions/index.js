import axios from "axios"

import { ADD, TODO_GET,GET,UPDATE,DELETE} from "../types/index"


export const addTodos = (task) => async dispatch => {
    dispatch({
        type: ADD.REQUEST
    })

    try {
        await axios.post("http://localhost:4000/todos", task)
        dispatch({
            type: ADD.SUCCESS,
            addmessage: "Todo added Successfully"
        })

    } 
    catch (error) {
        console.log({ error });
        dispatch({
            type: ADD.FAIL,
            error: "an error occured"
        })

    }
}


export const getTodos = () => async dispatch => {
    dispatch({
        type: GET.REQUEST
    })

    try {
        const { data } = await axios.get("http://localhost:4000/todos")
    
        dispatch({
            type: GET.SUCCESS,
            todos: data,
            getmessages:"Todos"
        })
    }
    catch (error) {
        console.log({ error });
        dispatch({
            type: GET.FAIL,
            error: "an error occured"
        })

    }
}



export const getSpecificTodo= () => async dispatch => {
    dispatch({
        type: TODO_GET.REQUEST
    })

    try {
        await axios.get("http://localhost:4000/todos")

        dispatch({
            type: TODO_GET.SUCCESS,
        })



    }
    catch (error) {
        console.log({ error });
        dispatch({
            type: TODO_GET.FAIL,
            error: "an error occured"
        })

    }
}




export const updateTodos = (id, desc)=> async dispatch => {
    dispatch({
        type:UPDATE.REQUEST})

    try {
         await axios.put(`http://localhost:4000/todos/${id}`)
       
        dispatch({
            type:UPDATE.SUCCESS,
            uptmessage:"TODO Updated SucessFully "
        })

    } catch (error) {
        console.log({ error });
        dispatch({
            
            type:UPDATE.FAIL,
            error:"An error occured"
        })

    }
}



export const deleteTodos = (id)=> async dispatch => {
    dispatch({
        type:DELETE.REQUEST})
    try {
        await axios.delete(`http://localhost:4000/todos/${id}`)
        dispatch({
            type:DELETE.SUCCESS,
           delmessage:"TODO Deleted Successfully"
           
        })
    } catch (error) {
        console.log({ error });
        dispatch({
            
            type:DELETE.FAIL,
            error:"An error occured"
        })

    }
}