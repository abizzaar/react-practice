import { useState } from "react";
import { TaskItem } from "./TaskItem";
import { useTasks } from "@/hooks/useTasks";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FILTER_VALUES, type Filter } from "@/types/Filter";
import { capitalize } from "@/utils/capitalize";
import { Input } from "@/components/ui/input";
import { useFilteredTasks } from "@/hooks/useFilteredTasks";


export function TaskList() {
    const [input, setInput] = useState("");
    const [filterInput, setFilterInput] = useState("")
    const [filterSelect, setFilterSelect] = useState<Filter>(FILTER_VALUES[0])

    const { tasks, addTask, removeTask, toggleDone } = useTasks()

    const filteredTasks = useFilteredTasks(tasks, filterSelect, filterInput)

    const handleAddTask = () => {
        if (!input.trim()) return;
        addTask(input)
        setInput("");
    };

    const handleRemoveTask = (id: number) => {
        removeTask(id)
    };

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
                <div className="flex">
                    <Input value={input} onChange={e => setInput(e.target.value)} className="max-w-sm"/>
                    <Button className="ml-2" onClick={handleAddTask}>Add Task</Button>
                </div>
                <div className="flex mt-2">
                    <Input className="max-w-36" placeholder="Filter tasks..." value={filterInput} onChange={e => setFilterInput(e.target.value)} />
                    <Select value={filterSelect} onValueChange={setFilterSelect}>
                        <SelectTrigger className="ml-2">
                            <SelectValue placeholder="Select a filter"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    FILTER_VALUES.map(f => <SelectItem key={f} value={f}>{capitalize(f)}</SelectItem>)
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <ul className="mt-3">
                    {filteredTasks.map(task => (
                        <TaskItem key={task.id} task={task} onRemove={handleRemoveTask} onCheckToggle={toggleDone} />
                    ))}
                </ul>
            </div>
        </>
    )
}