import { useMemo, useState } from "react";
import { TaskItem } from "./TaskItem";
import { useTasks } from "@/hooks/useTasks";
import { Button } from "@/components/ui/button";


export function TaskList() {
    const [input, setInput] = useState("");
    const [filterInput, setFilterInput] = useState("")

    const { tasks, addTask, removeTask, toggleDone } = useTasks()

    const handleAddTask = () => {
        if (!input.trim()) return;
        addTask(input)
        setInput("");
    };

    const handleRemoveTask = (id: number) => {
        removeTask(id)
    };

    const visibleTasks = useMemo(() => {
        return tasks.filter(t => {
            return t.title.toLowerCase().includes(filterInput.toLowerCase())
        });
    }, [filterInput, tasks]);

    return (
        <>
            <p>
                I asked ChatGPT to simulate a challenge for me, where it gave me some code and made me iterate on it. Below is what we came up with.
            </p>
            <p>
                Here's the{' '}
                <a className="text-blue-600 hover:underline" href="https://chatgpt.com/share/686309ba-40e8-800f-ac15-46b8a6abec25">ChatGPT link</a>{' '}
                of the conversation.
            </p>
            <div className="mt-10">
                <div>
                    <input value={input} onChange={e => setInput(e.target.value)} className="border border-input px-2" />
                    <Button className="ml-2" onClick={handleAddTask}>Add Task</Button>
                </div>
                <input className="mt-2 border border-input px-2" placeholder="Filter tasks..." value={filterInput} onChange={e => setFilterInput(e.target.value)} />
                <ul className="mt-3">
                    {visibleTasks.map(task => (
                        <TaskItem key={task.id} task={task} onRemove={handleRemoveTask} onCheck={toggleDone} />
                    ))}
                </ul>
            </div>
        </>
    )
}