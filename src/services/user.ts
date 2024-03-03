import { Address } from "viem"
import request from "@/utils/request"



export const queryIdCard = async (params: { idCard: string }) => {
  const resp = await request<{ isValid: boolean }>('POST', '/person/validateIdCard', params)
  return resp.data
}

export const _register = async (params: {
  idCard:string,
  personAddress:Address,
  userName:string,
  birthYear:number,
  sex:number
}) => {
  const resp = await request<{ isValid: boolean }>('POST', '/person/register', params)
  return resp.data
}