export type GetLlmEvalsParams = {
    sortOrder: 'ASC' | 'DESC',
    sortColumn: 'model' | 'timestamp' | 'status' | 'score',
    limit: number,
    offset: number,
};

export type GetLlmEvalsResult = {
    result: LlmEval[],
    totalCount: number
}

export type LlmEval = {
    id: string,
    model: string,
    timestamp: string,
    status: 'failed' | 'succeeded',
    score: number
}