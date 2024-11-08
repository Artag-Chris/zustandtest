import {create} from 'zustand'

export type Status = `TODO`| `IN_PROGRESS`| `Done`

export type Task={
    id: string,
    title: string,
    description: string,
    status: Status
}

export const useTaskStore = create(()=>({

}))