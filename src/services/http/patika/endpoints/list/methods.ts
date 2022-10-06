import service from "../../instance"
import { CreateListRequestPayload, DestroyListRequestPayload, GetByIdListRequestPayload, GetListRequestPayload, UpdateListRequestPayload } from "./types"


export const create = (payload: CreateListRequestPayload) =>
    service.post("list", payload)

export const destroy = (payload: DestroyListRequestPayload) =>
    service.post(":id", payload)

export const get = (payload: GetListRequestPayload) =>
    service.post("list", payload)

export const getById = (payload: GetByIdListRequestPayload) =>
    service.post(":id", payload)

export const update = (payload: UpdateListRequestPayload) =>
    service.post(":id", payload)