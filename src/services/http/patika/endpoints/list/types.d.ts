export type CreateListRequestPayload = {
    title: string
    boardId: number
    order?: number
}

export type DestroyListRequestPayload = {
    id: number
}

export type GetListRequestPayload = {
    boardId: number
}

export type GetByIdListRequestPayload = {
    id: number
}

export type UpdateListRequestPayload = {
    title?: string
    boardId?: number
    order?: number
    id:number
}

