import {create} from 'zustand'
import { v4 as uuid } from 'uuid'

export type Status = `TODO`| `IN_PROGRESS`| `Done`

export type Task={
    id: string,
    title: string,
    description?: string,
    status: Status
}

export type State ={
    task: Task[]
}

export type Actions={
    addTask:(title:string,description?:string)=> void
    removeTask:(id:string)=>void
    updateTask:(id:string, status:Status)=>void
}

export const useTaskStore = create<State & Actions>()((set)=>({
    task:[],
    addTask:(title:string, description?:string)=>set(state=>({
        task:[...state.task,{id:uuid(),title, description,status:`TODO`}]
    })),
    removeTask:(id:string)=>set(state =>({
        task:state.task.filter(task=>task.id!==id)
    })),
    updateTask:(id:string,status:Status)=>set(state =>({
        task:state.task.map(task =>task.id==id? {...task,status}:task)
    }))
}))