
const pool= require('../database/db')

class todoController{
     addTodo=async (req,res)=>{
        try {
          const {description} = req.body;
          const newTodo = await pool.query("INSERT INTO todo(description) VALUES($1) RETURNING *",
          [description]
         );
     
         res.json(newTodo);
     
        } catch (error) {
            console.log(error)
        } 
     }

     

     getTodos= async(req,res)=>{
        try {
          const alltodo= await pool.query("SELECT * FROM todo");
          res.json(alltodo.rows)
        } catch (error) {
            console.log(error.message)
        }
      };


      getSpecificTodo= async(req,res)=>{
        try {
          const {id}= req.params;
            const todo= await pool.query("SELECT * FROM todo WHERE todo_id= $1", [id]);
            res.json(todo.rows[0]);
    
        } catch (error) {
            console.log(error.message)
        }
    };



    updateTodo= async(req,res)=>{
        const {id} =req.params;
        const{ description} = req.body;
   
        await pool.query("UPDATE todo SET description =$1 WHERE todo_id=$2"
        ,[description,id]
        )
        res.json("Todo Updated ")
   
   };


  deleteTodo= async(req,res)=>{
    const {id} =req.params;

    const deletetodo= await pool.query("DELETE FROM todo WHERE todo_id=$1"
    ,[id]
    )
    res.json("Todo Deleted ")

};


}

module.exports= new todoController;

