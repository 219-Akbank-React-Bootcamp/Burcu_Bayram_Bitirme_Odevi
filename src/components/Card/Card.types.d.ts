import { PropsWithChildren } from "react"

export type CardProps = PropsWithChildren<{
    title: string
    listId?: number
    description?: string
    duedate?: string
    order?: number
}>