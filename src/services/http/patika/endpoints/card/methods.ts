import service from "../../instance"
import { CreateCardRequestPayload, CreateCardResponsePayload, UpdateCardRequestPayload } from "./types"


export const create = (payload: CreateCardRequestPayload): Promise<CreateCardResponsePayload> =>
    service.post("card", payload)

export const destroy = (id: number) => service.delete(`card/${id}`)

export const get = () => service.get("card")

export const getById = (id: number) => service.get(`card/${id}`)

export const update = (id: number, payload: UpdateCardRequestPayload) => service.put(`card/${id}`, payload)