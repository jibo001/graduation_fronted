import { useContractRead, useContractReads } from "wagmi";
import { getCharityContract } from "@/utils/contractHelpers";
import { generateArray } from "@/utils";

export default function useVoteList() {
  const charityContract = getCharityContract()
  const { data } = useContractRead(({
    ...charityContract,
    functionName: 'voteCurrentId',
  }))

  const { data: auditorAddress, isSuccess } = useContractRead({
    ...charityContract,
    functionName: 'getAuditorAddress'
  })

  const { data: votes, isLoading } = useContractReads({
    contracts: [...generateArray(Number(data || 0)).map(id => ({
      ...charityContract,
      functionName: 'getVoteDetail',
      args: [BigInt(id || 0)],
    } as const))],
    enabled: data > 0 && isSuccess
  })

  const voteList = votes?.map(({ result }) => ({
    ...result,
    isCurrentAuditor: auditorAddress.findIndex(address => address === result.targetPerson.personAddress) !== -1
  }))

  return {
    votes,
    isLoading,
    voteList
  }
}