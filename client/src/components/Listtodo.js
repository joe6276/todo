import axios from "axios";
import React,{useState,useEffect} from "react";
import { AiTwotoneDelete} from 'react-icons/ai'
import Edittodo from "./Edittodo";

const Listtodo=()=>{

    const [tasks, settasks] = useState([])

    const getTask=async ()=>{
       await axios.get('http://localhost:4000/todos').then(
           response=>{
               console.log(response.data);
               const results=response.data;
               settasks(results)
           }
       )
    }

  useEffect(() => {
    getTask()
  }, [])

  const deleteTodo = async (id)=>{

    try {
       await axios.delete(`http://localhost:4000/todos/${id}`)

       settasks(tasks.filter(todo => todo.todo_id!== id))
    } catch (error) {
        console.log(error.message)
    }
    
  }



    return(
        <>
        <h1> Get List of All Posts</h1>


        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col-">Description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    
    </tr>
  </thead>
  <tbody>
  {tasks.map(task=>(
     <tr key ={task.todo_id}>
        <th scope="row">{task.todo_id}</th>
        <td>{task.description}</td>
        <td><Edittodo id={task.todo_id} desc={task.description}  onClick={ console.log(task.todo_id)}/></td>
        <td><button  onClick={ ()=>deleteTodo(task.todo_id)} className="btn btn-danger"> DELETE <AiTwotoneDelete  style={{fontSize:"20px"}}/> </button></td>
      </tr>  
        ))}
    
    </tbody>


  </table>
      
        </>
    )
}

export default Listtodo;