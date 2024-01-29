import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Toast } from 'antd-mobile'
import useCallWithGasPrice from '@/hooks/useCallWithGasPrice'
import useCatchTxError from '@/hooks/useCatchTxError'
import { getCharityContract } from '@/utils/contractHelpers'

export default function useAudit() {
  const [reason, setReason] = useState('')
  const { fetchWithCatchTxError, loading } = useCatchTxError()
  const { callWithGasPrice } = useCallWithGasPrice()
  const navigate = useNavigate()

  const charityContract = getCharityContract()

  const audit = async (id: string, isAgree: boolean) => {
    await fetchWithCatchTxError(() => callWithGasPrice(charityContract, 'auditDonate', [BigInt(id), isAgree, reason]))
    Toast.show('审核成功')
    navigate('/auditList')
  }
  return {
    loading,
    audit,
    reason,
    setReason,
  }
}
