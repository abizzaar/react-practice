import type { Task } from "@/types/Task";
import { useCallback, useState } from "react";

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([])

    const addTask = useCallback((title: string) => {
       setTasks(prev => [...prev, { id: Date.now(), title: title.trim(), done: false }]) 
    }, [])

    const removeTask = useCallback((id: number) => {
        setTasks(prev => prev.filter((t) => t.id !== id))
    }, []);

    const toggleDone = useCallback((id: number) => {
        setTasks(prev => prev.map(x => x.id !== id ? x : { ...x, done: !x.done }))
    }, [])

    return { tasks, addTask, removeTask, toggleDone }
}