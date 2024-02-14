import { Toast } from "antd-mobile"
import { useState } from "react"
import useCallWithGasPrice from "@/hooks/useCallWithGasPrice"
import useCatchTxError from "@/hooks/useCatchTxError"
import { getCharityContract } from "@/utils/contractHelpers"

export default function useVote() {
  const [num, setNum] = useState('')
  const { fetchWithCatchTxError, loading } = useCatchTxError()
  const { callWithGasPrice } = useCallWithGasPrice()

  const charityContract = getCharityContract()

  const vote = async (id: string, isAgree: boolean) => {
    await fetchWithCatchTxError(() => callWithGasPrice(charityContract, 'vote', [BigInt(id), isAgree, num]))
    Toast.show('投票成功')
  }
  return {
    loading,
    vote,
    num,
    setNum,
  }
}