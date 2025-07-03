import type { LlmEval } from "@/types/LlmEvals"

export const getLlmEvalsFixture = ({limit}: {limit: number}): LlmEval[] => {
    const result: LlmEval[] = []
    for (let i = 0; i < limit; i++) {
        result.push({
            model: Math.random() > 0.5 ? 'gpt-4' : 'claude-sonnet-4',
            timestamp: (new Date()).toISOString(), // TODO: randomize this too.
            status: Math.random() > 0.5 ? 'succeeded' : 'failed',
            score: Math.floor(Math.random() * 100),
            id: Math.random().toString()
        })
    }
    return result
}