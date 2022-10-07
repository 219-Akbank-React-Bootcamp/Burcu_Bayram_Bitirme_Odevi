import { PropsWithChildren } from "react"

export type CardListItemProps = PropsWithChildren<{
    title: string
    listId?: number
    description?: string
    duedate?: string
    order?: number
}>