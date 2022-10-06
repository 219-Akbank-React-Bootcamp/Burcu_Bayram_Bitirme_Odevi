export type CreateBoardRequestPayload = {
    title: string
    members?: Array<number>
}

export type DestroyBoardRequestPayload = {
    id: number
}

export type GetByIdBoardRequestPayload = {
    id: number
}

export type UpdateBoardRequestPayload = {
    title: string
    members?: Array<number>
    id: number
}

