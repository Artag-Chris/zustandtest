import {create} from 'zustand'

export type Status = `TODO`| `IN_PROGRESS`| `Done`

export type Task={
    id: string,
    title: string,
    description: string,
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
    addTask:()=>{},
    removeTask:()=>{},
    updateTask:()=>{}
}))