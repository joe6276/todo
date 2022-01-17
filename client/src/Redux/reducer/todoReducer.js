import { ADD, TODO_GET,GET,UPDATE,DELETE} from "../types/index"



const initialState = {
    todos: [],
    todo: {},
    loading: false,
    error: "",
    addmessage: "",
    delmessage: "",
    uptmessage:"",
    getmessages:"",
    updateError:"",
    addError:"",
    updateError:"",
    deleteerror:""

}

const taskReducer  = (state = initialState, action) => {
    switch (action.type) {
        case GET.REQUEST:
            return { ...state, TasksLoading: true, tasksError: "", todos:[] }
        case GET.SUCCESS:
            return { ...state, TasksLoading: false,todos: action.todos }
        case GET.FAIL :
            return { ...state, TasksLoading: false, getmessage: action.error, todos: [] }


        case UPDATE.REQUEST:
            return { ...state, Loading: true, updateError: "" }
        case UPDATE.SUCCESS:
            return { ...state, Loading: false, uptmessage: action.uptmessage }
        case UPDATE.FAIL :
            return { ...state, Loading: false, updateError: action.error}



        case ADD.REQUEST:
            return { ...state, Loading: true, addError: "" }
        case ADD.SUCCESS:
            return { ...state, Loading: false,addmessage: action.addmessage }
        case ADD.FAIL :
                return { ...state, Loading: false, addError: action.error}

        case TODO_GET.REQUEST:
            return { ...state, loading: true, error: "", message: "" }
        case TODO_GET.SUCCESS:
            return { ...state, loading: false, error: "", message: action.message }
        case TODO_GET.FAIL:
            return { ...state, loading: false, error: action.error, message: "" }

        case DELETE.REQUEST:
            return { ...state, loading: true, deleteerror: ""}
        case DELETE.SUCCESS:
            return { ...state, loading: false, deleteerror: "", delmessage: action.delmessage }
        case DELETE.FAIL:
            return { ...state, loading: false, deleteerror: action.error, delmessage: "" }


        case RESET_NOTIFICATION:
            return {...state, message: ""}


        default:
            return { ...state };


    }
}

export default taskReducer