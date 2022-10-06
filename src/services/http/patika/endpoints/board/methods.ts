import service from "../../instance"
import { CreateBoardRequestPayload, DestroyBoardRequestPayload, GetByIdBoardRequestPayload, UpdateBoardRequestPayload } from "./types"


export const create = (payload: CreateBoardRequestPayload) =>
    service.post("addboard", payload)

export const destroy = (payload: DestroyBoardRequestPayload) =>
    service.post(":id", payload)

export const getById = (payload: GetByIdBoardRequestPayload) =>
    service.post(":id", payload)

export const update = (payload: UpdateBoardRequestPayload) =>
    service.post(":id", payload)