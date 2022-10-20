export type CreateCardRequestPayload = {
    title: string
    listId: number
    description?: string
    duedate?: string
    order?: number
    id: number;
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

    id: number;
    title: string;
    description: string;
    duedate: Date;
    comments: Comment[];
    listId: number;
    order: number;


}