import { useContractRead } from "wagmi"
import { getCharityContract } from "@/utils/contractHelpers"

export default function useCurrentId() {
  const charityContract = getCharityContract()
  const { data: currentId, refetch: currentIdRefetch } = useContractRead({
    ...charityContract,
    functionName: 'currentId',
    cacheTime: Infinity
  })
  return {
    currentId,
    currentIdRefetch
  }
}