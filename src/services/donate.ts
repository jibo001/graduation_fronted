import { Address } from "viem"
import { Donate } from "@/types/donate"
import request from "@/utils/request"



export const _createDonate = async (params: Pick<Donate, 'json' | 'personAddress'> & { targetAmount: number, id: number }) => {
  const resp = await request<any>('POST', '/donate/createDonate', params)
  return resp.data
}

export const _donateHandler = async (params: {
  donateId: number,
  amount: number,
  hash: string,
  address: Address,
  toAddress: Address
}) => {
  const resp = await request<any>('POST', '/donate/donateHandler', params)
  return resp.data
}

export const _dataPanel = async () => {
  const resp = await request<any>('GET', '/dataPanel/index', null)
  return resp.data
}