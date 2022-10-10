import { PropsWithChildren } from "react"

export type CardListItemProps = PropsWithChildren<{
    id: number
    title: string
    listId?: number
    description?: string
    duedate?: string
    order?: number
    index: number
    cardItemValues?: string
    onChange: (values: CardListValuesProps) => void

}>


