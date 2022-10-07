import service from "../../instance"
import { CreateListRequestPayload, UpdateListRequestPayload } from "./types"


export const create = (payload: CreateListRequestPayload) =>
    service.post("list", payload)

export const destroy = () => service.delete(":id")

export const get = () => service.get("list")

export const getById = () => service.get(":id")

export const update = (payload: UpdateListRequestPayload) =>
    service.put(":id", payload)