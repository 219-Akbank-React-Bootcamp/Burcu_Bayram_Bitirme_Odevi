export type CreateCardRequestPayload = {
    title: string
    listId: number
    description?: string
    duedate?: string
    order?: number
}

export type DestroyCardRequestPayload = {
    id: number
}

export type GetCardRequestPayload = {
    listId?: number
}

export type GetByIdCardRequestPayload = {
    id: number
}

export type UpdateCardRequestPayload = {
    title?: string
    listId?: number
    description?: string
    duedate?: string
    order?: number
    id: number
}

export type CreateCardResponsePayload = {
    data: {
        title: string
        id: number
    }
}