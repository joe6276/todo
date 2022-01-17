import axios from "axios";
import React, { useState } from "react";
import { AiTwotoneEdit} from 'react-icons/ai'

const Edittodo= ({id,desc })=>{
    const [description,setDescription]= useState( desc)

    const  updateDesc= async e=>{
            try {
                e.preventDefault();
                await axios.put(`http://localhost:4000/todos/${id}`,{description})
                
            } catch (error) {
                console.log(error.message)
            }
    }
    return(
        <>
<button type="button" class="btn btn-primary"
 data-bs-toggle="modal"
  data-bs-target={`#id${id}`}>
 Edit<AiTwotoneEdit/>
</button>

<div class="modal fade" id={`id${id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Enter New Description:</label>
            <input type="text"
             value={description}  
             onChange={e =>  setDescription(e.target.value)}
            class="form-control" id="recipient-name"/>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={e=> updateDesc(e)} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}


export default Edittodo