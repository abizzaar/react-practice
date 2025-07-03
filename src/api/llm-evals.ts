import { getLlmEvalsFixture } from "@/fixtures/llm-evals"
import type { GetLlmEvalsParams, GetLlmEvalsResult } from "@/types/LlmEvals"

export async function getLlmEvals({
    sortOrder = 'ASC',
    sortColumn = 'timestamp',
    limit = 10,
    offset = 0
}: Partial<GetLlmEvalsParams> = {}): Promise<GetLlmEvalsResult> {
    // TODO: handle params
    await simulateTimeout(1000)

    return {
        result: getLlmEvalsFixture({limit}),
        totalCount: 55
    }
}

export async function simulateTimeout(delayMillis: number) {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve(0)
        }, delayMillis)
    })
}
