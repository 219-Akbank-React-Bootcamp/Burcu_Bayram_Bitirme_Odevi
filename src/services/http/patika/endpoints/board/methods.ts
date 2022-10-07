import service from "../../instance"
import { CreateBoardRequestPayload, UpdateBoardRequestPayload } from "./types"


export const create = (payload: CreateBoardRequestPayload) =>
    service.post("addboard", payload)

export const destroy = () => service.delete(":id")

export const get = () => service.get(":id")

export const getById = () => service.get(":id")

export const update = (payload: UpdateBoardRequestPayload) =>
    service.put(":id", payload)