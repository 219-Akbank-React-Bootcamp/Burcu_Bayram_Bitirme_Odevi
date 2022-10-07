import service from "../../instance"
import { CreateCardRequestPayload, CreateCardResponsePayload, UpdateCardRequestPayload } from "./types"


export const create = (payload: CreateCardRequestPayload): Promise<CreateCardResponsePayload> =>
    service.post("card", payload)

export const destroy = () => service.delete(":id")

export const get = () => service.get("card")

export const getById = () => service.get(":id")

export const update = (payload: UpdateCardRequestPayload) => service.put(":id")