const express= require('express')
const router = express.Router();
const todoController=require('../controller/index');


router.post("/",todoController.addTodo);
router.get("/",todoController.getTodos);
router.put("/:id",todoController.updateTodo);
router.delete("/:id",todoController.deleteTodo);
router.get("/:id",todoController.getSpecificTodo);



module.exports= router