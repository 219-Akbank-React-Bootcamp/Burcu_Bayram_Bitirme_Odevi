import { DraggableLocation } from "react-beautiful-dnd"
import { CardListItemProps } from "../CardListItem/CardListItem.types"

export type BoardProps = {

    destination?: DraggableLocation
    onDragEnd: (result: DropResult, provided: ResponderProvided) => void
    
}

export type BoardValuesProps = {
    title: string
    members?: number
    id: number
    lists: any
}