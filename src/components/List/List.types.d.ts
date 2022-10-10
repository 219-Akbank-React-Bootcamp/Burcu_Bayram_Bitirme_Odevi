import React, { PropsWithChildren } from "react"

export type ListProps = PropsWithChildren<{
    onClick?: React.MouseEvent<HTMLInputElement>;
    title: string
    id: number
    listId?: number
    boardId?: number
    order?: number

}>


function useEffect(effect: EffectCallback, deps?: DependencyList): void;

type EffectCallback = () => (void | (() => void | undefined));

