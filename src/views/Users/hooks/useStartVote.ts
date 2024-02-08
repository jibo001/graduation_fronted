import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Address } from "viem"
import useCallWithGasPrice from "@/hooks/useCallWithGasPrice"
import useCatchTxError from "@/hooks/useCatchTxError"
import { getCharityContract } from "@/utils/contractHelpers"

export default function useStartVote() {
  const charityContract = getCharityContract()

  const [reason, setReason] = useState('')
  const [visible, setVisible] = useState(false)
  const { fetchWithCatchTxError, loading } = useCatchTxError()
  const { callWithGasPrice } = useCallWithGasPrice()
  const navigate = useNavigate()

  useEffect(() => {
    if (!visible) {
      setReason('')
    }
  }, [visible])

  const startVote = async (address: Address) => {
    await fetchWithCatchTxError(() => callWithGasPrice(charityContract, 'startVoteAuditor', [address, reason]))
    setVisible(false)
    navigate('/vote')
  }
  return {
    reason,
    setReason,
    visible,
    setVisible,
    loading,
    startVote
  }
}