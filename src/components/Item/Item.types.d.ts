import { PropsWithChildren } from "react"

export type ItemProps = PropsWithChildren <{
    onClick?: React.MouseEvent<HTMLInputElement>  ;
    title: string
}>

