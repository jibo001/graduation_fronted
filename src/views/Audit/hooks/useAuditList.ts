import { useAccount, useContractRead } from 'wagmi'
import { getCharityContract } from '@/utils/contractHelpers'
import { getAuditStatus, getDonateDetail } from '@/utils/donate'

export default function useAuditList() {
  const { isConnected, address } = useAccount()

  const charityContract = getCharityContract()

  const { data, isLoading } = useContractRead({
    ...charityContract,
    functionName: 'getAuditorDonates',
    args: [address],
    enabled: isConnected,
  })

  const auditList = data?.map((audit) => {
    return {
      person: audit.person,
      donate: getDonateDetail(audit.donate),
      auditStatus: getAuditStatus(getDonateDetail(audit.donate), address),
    }
  })
  auditList.reverse()
  return {
    auditList,
    isLoading,
  }
}
