import request from "@/utils/request"



export const queryIdCard = async (params: { idCard: string }) => {
  const resp = await request<{ isValid: boolean }>('POST', '/validateIdCard', params)
  return resp.data
}