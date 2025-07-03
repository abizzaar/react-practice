import { getLlmEvals } from "@/api/llm-evals";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { LlmEval } from "@/types/LlmEvals";
import { useEffect, useState } from "react";

export function LLMEvalsPage() {
    // TODO: optimize this further by potentially caching old pages - figure out best way to do that.
    const [llmEvalResults, setLlmEvalResults] = useState<LlmEval[]>([])
    const [totalCount, setTotalCount] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                // TODO: handle errors
                const results = await getLlmEvals()
                setIsLoading(false)
                setLlmEvalResults(results.result)
                setTotalCount(results.totalCount)
            } catch (error) {
                console.error('Error encountered')
            }
        };

        fetchData()
    }, [])

    return (
        <div>
            <h1 className="ml-2">LLM Evals Page</h1>
            <Table className="mt-4">
                <TableCaption>Past evaluation runs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Timestamp</TableHead>
                        <TableHead>Model</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Score</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {isLoading ? (new Array(10)).fill(0).map((_, i) => 
                        <TableRow key={i}>
                            <TableCell>
                                <Skeleton className="h-4 w-50" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-full" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-full" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-full" />
                            </TableCell>
                        </TableRow> 
                    ) : llmEvalResults.map((result) => (
                        <TableRow key={result.id}>
                            <TableCell className="font-medium">{result.timestamp}</TableCell>
                            <TableCell>{result.model}</TableCell>
                            <TableCell>{result.status}</TableCell>
                            <TableCell className="text-right">{result.score}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TableCell colSpan={3}>Total Count</TableCell>
                    <TableCell className="text-right">{totalCount}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
