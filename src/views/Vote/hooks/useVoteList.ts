import { useContractRead, useContractReads } from "wagmi";
import { getCharityContract } from "@/utils/contractHelpers";
import { generateArray } from "@/utils";

export default function useVoteList() {
  const charityContract = getCharityContract()
  const { data } = useContractRead(({
    ...charityContract,
    functionName: 'voteCurrentId',
  }))

  const { data: votes, isLoading } = useContractReads({
    contracts: [...generateArray(Number(data || 0)).map(id => ({
      ...charityContract,
      functionName: 'getVoteDetail',
      args: [BigInt(id || 0)],
    } as const))],
    enabled: data > 0
  })

  votes?.reverse()

  return {
    votes,
    isLoading
  }
}