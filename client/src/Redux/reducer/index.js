import { combineReducers } from "redux"
const todoReducer=require('./todoReducer')

const rootReducer = combineReducers({
    todo:todoReducer

})

export default rootReducer