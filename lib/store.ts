import {create} from 'zustand'
import { v4 as uuid } from 'uuid'
import { persist } from 'zustand/middleware'

export type Status = `TODO`| `IN_PROGRESS`| `Done`

export type Task={
    id: string,
    title: string,
    description?: string,
    status: Status
}

export type State ={
    task: Task[]
    draggedTask:string | null
}

export type Actions={
    addTask:(title:string,description?:string)=> void
    dragTask: (id:string|null)=>void
    removeTask:(id:string)=>void
    updateTask:(id:string, status:Status)=>void
}

export const useTaskStore = create<State & Actions>()(
    persist(
    (set)=>({
    task:[],
    draggedTask: null,
    addTask:(title:string, description?:string)=>set(state=>({
        task:[...state.task,{id:uuid(),title, description,status:`TODO`}]
    })),        
    dragTask:(id:string|null) =>set({
        draggedTask:id
    }),
    removeTask:(id:string)=>set(state =>({
        task:state.task.filter(task=>task.id!==id)
    })),
    updateTask:(id:string,status:Status)=>set(state =>({
        task:state.task.map(task =>task.id==id? {...task,status}:task)
    }))
}),
{name:`task-store`,skipHydration:true}
    )
)