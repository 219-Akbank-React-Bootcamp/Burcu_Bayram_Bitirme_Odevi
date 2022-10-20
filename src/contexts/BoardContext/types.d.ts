

export type StateType = {

    list: Array<{
        title: string
        boardId?: number
        order?: number
    }>

    card: Array<{
        [x: string]: any
        title: string
        listId?: number
        description?: string
        duedate?: string
        order?: number
    }>
}



export type ContextType ={
    state: StateType
    dispatches: any
}