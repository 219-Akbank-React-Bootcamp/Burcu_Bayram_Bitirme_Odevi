export type CreateBoardRequestPayload = {
    title: string
    members?: Array<number>
}



export type UpdateBoardRequestPayload = {
    title: string
    members?: Array<number>
    id: number
}

