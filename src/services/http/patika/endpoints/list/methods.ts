import service from "../../instance"
import { CreateListRequestPayload, UpdateListRequestPayload } from "./types"


export const create = (payload: CreateListRequestPayload) =>
    service.post("list", payload)

export const destroy = (id:number) => service.delete(`list/${id}`)

export const get = () => service.get("list")

export const getById = (id:number) => service.get(`list/${id}`)

export const update = (id: number, payload: UpdateListRequestPayload) =>
    service.put(`list/${id}`, payload)