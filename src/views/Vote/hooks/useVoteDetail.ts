import { useContractRead } from "wagmi";
import { getCharityContract } from "@/utils/contractHelpers";

export default function useVoteDetail(id: bigint) {
  const charityContract = getCharityContract()
  const { data: voteDetail, isLoading: voterDetailLoading, isSuccess } = useContractRead({
    ...charityContract,
    functionName: 'getVoteDetail',
    args: [id],
    watch: true,
    enabled: id !== undefined
  })


  return {
    voteDetail,
    isLoading: voterDetailLoading
  }
}