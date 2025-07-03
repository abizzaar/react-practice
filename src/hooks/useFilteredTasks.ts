import type { Filter } from "@/types/Filter";
import type { Task } from "@/types/Task";
import { useMemo } from "react";

export function useFilteredTasks(
    tasks: Task[],
    filterSelect: Filter,
    filterInput: string
) {
    return useMemo(() => {
        return tasks.filter(t => {
            const filterSelectResult =
                filterSelect === "all" ? true
                : filterSelect === "active" ? !t.done
                : filterSelect === "completed" ? t.done
                : true
            return filterSelectResult && t.title.toLowerCase().includes(filterInput.toLowerCase())
        });
    }, [filterSelect, filterInput, tasks]);
}