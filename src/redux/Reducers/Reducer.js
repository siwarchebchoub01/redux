import Search from "../../Search"
import { ADD,DESC,EDIT, search } from "../Const/const"

const initialstate={
 data: [
 {id:0,
        description:"cyrine",
        isdone:false
},
    {id:1,
        description:"hamza",
        isdone:true
 },
 {id:2,
    description:"dawser",
    isdone:true
},
{id:3,
    description:"Siwar",
    isdone:true
}
    ]}

export const    TodoReducers =(state=initialstate,action)=>{

switch(action.type){
    case ADD:
        return {...state,data:[...state.data,{...action.payload,id:state.data.length}]}
        case EDIT:
            return {...state,data:state.data.map((Task)=> Task.id == action.payload.ID ?{description:action.payload.desc}:Task)}
           case search:
            return {...state,data:state.data.filter((el)=>el.isdone==action.payload.done)}
        case DESC:
            return{...state,data:state.data.filter((el)=>el.description.toLowerCase().includes(action.payload.desc.toLowerCase()))}
   
default:
    return state
}}