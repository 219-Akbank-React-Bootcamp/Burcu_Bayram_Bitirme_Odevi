import { PropsWithChildren } from "react"

export type ListProps = PropsWithChildren<{
    onClick?: React.MouseEvent<HTMLInputElement>;
    title: string

    boardId?: number
    order?: number
}>

