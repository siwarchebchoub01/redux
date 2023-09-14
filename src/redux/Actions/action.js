import { ADD, DESC, EDIT,search } from "../Const/const"

export const AddTask=(desc,Done)=>{
return {type:ADD ,payload:{description:desc,isdone:Done}}
}
export const ed=(desc,ID)=>{
    return {type:EDIT ,payload:{desc,ID}}
    }
    export const checked=(done)=>{
        return {type:search ,payload:{done}}
        }
        export const Searchh=(desc)=>{
            return {type:DESC ,payload:{desc}}
            }