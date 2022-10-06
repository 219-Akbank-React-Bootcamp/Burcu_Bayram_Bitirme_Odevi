import { PropsWithChildren } from "react"

export type DetailedCardProps = PropsWithChildren<{
    title: string
    listId?: number
    description?: string
    duedate?: string
    order?: number
}>