import service from "../../instance"
import { CreateBoardRequestPayload, UpdateBoardRequestPayload } from "./types"


export const create = (payload: CreateBoardRequestPayload) =>
    service.post("addboard", payload)

export const destroy = (id: number) => service.delete(`board/${id}`)

export const get = (id: number) => service.get(`board/${id}`)

export const getById = (id: number) => service.get(`board/${id}`)

export const update = (id: number, payload: UpdateBoardRequestPayload) =>
    service.put(`board/${id}`, payload)

