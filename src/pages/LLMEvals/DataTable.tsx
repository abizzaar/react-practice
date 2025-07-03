import type { LlmEval } from "@/types/LlmEvals"
import type { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<LlmEval>[] = [
    {
        accessorKey: "timestamp",
        header: "Timestamp",
    },
    {
        accessorKey: "model",
        header: "Model",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "score",
        header: "Score"
    }
  ]
