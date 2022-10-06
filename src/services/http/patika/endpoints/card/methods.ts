import service from "../../instance"
import { CreateCardRequestPayload, CreateCardResponsePayload, DestroyCardRequestPayload, GetByIdCardRequestPayload, GetCardRequestPayload, UpdateCardRequestPayload } from "./types"


export const create = (payload: CreateCardRequestPayload): Promise<CreateCardResponsePayload> =>
    service.post("card", payload)

export const destroy = (payload: DestroyCardRequestPayload) =>
    service.post(":id", payload)

export const get = (payload: GetCardRequestPayload) =>
    service.post("card", payload)

export const getById = (payload: GetByIdCardRequestPayload) =>
    service.post(":id", payload)

export const update = (payload: UpdateCardRequestPayload) =>
    service.post(":id", payload)