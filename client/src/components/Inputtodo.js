import React,{useState} from "react";
const axios= require('axios')

const Inputtodo=()=>{
    const [description, setdescription] = useState("")

      const onSubmitForm= async(e)=>{
       
        try {
           await axios.post('http://localhost:4000/todos',{description}).then(response=>{
                console.log(response)
            })
            
        } catch (error) {
            console.log(error.messsage)
        }
    }
 return(
     <>
     <h1 className="text-center mt-5"> Jonathan TODO List</h1>

     <form  onSubmit={onSubmitForm} className="d-flex mt-5 justify-content-around">
        <input  className="form-control" type='text'
         name="description" 
         value={description}
         onChange={e =>  setdescription(e.target.value)}/>
        <button className="btn btn-success"> Add </button>
     </form>
     </>
 )
}


export default Inputtodo;