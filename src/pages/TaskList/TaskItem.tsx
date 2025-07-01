import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Task } from "@/types/Task";
import { memo } from "react";
import { X } from "lucide-react"; // or any other icon

type TaskItemProps = {
    task: Task,
    onRemove: (id: number) => void
}

export const TaskItem = memo(({task, onRemove}: TaskItemProps) => {
    return (
        <li className="mt-1 flex items-center gap-2">
            <Checkbox id={`checkbox-${task.id}`}/>
            <Label htmlFor={`checkbox-${task.id}`}>{task.title}</Label>
            <Button variant="destructive" size="icon" onClick={() => onRemove(task.id)}><X className="h-4 w-4"/></Button>
        </li>
    )
});