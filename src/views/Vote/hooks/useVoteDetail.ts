import { useContractRead } from "wagmi";
import { getCharityContract } from "@/utils/contractHelpers";

export default function useVoteDetail(id: bigint) {
  const charityContract = getCharityContract()
  const { data: voteDetail, isLoading } = useContractRead({
    ...charityContract,
    functionName: 'getVoteDetail',
    args: [id],
  })
  return {
    voteDetail,
    isLoading
  }
}