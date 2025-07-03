import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Task } from "@/types/Task";
import { memo } from "react";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

type TaskItemProps = {
    task: Task,
    onRemove: (id: number) => void,
    onCheckToggle: (id: number) => void
}

export const TaskItem = memo(({task, onRemove, onCheckToggle}: TaskItemProps) => {
    return (
        <li className={cn("mt-1 flex items-center gap-2", task.done ? "line-through" : "")}>
            <Checkbox id={`checkbox-${task.id}`} onCheckedChange={() => { onCheckToggle(task.id) }} checked={task.done}/>
            <Label htmlFor={`checkbox-${task.id}`}>{task.title}</Label>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => onRemove(task.id)}><Trash2 className="h-4 w-4 text-red-500"/></Button>
        </li>
    )
});