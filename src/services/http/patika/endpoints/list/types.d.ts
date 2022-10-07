export type CreateListRequestPayload = {
    title: string
    boardId: number
    order?: number
}


export type UpdateListRequestPayload = {
    title?: string
    boardId?: number
    order?: number
    id:number
}

