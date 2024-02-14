import { Address, useContractReads } from "wagmi";
import { getCharityContract } from "@/utils/contractHelpers";

export default function useVoterRecords(voters: readonly Address[], id: bigint) {
  const charityContract = getCharityContract()
  const { data: voterRecords, isLoading: voterRecordsLoading } = useContractReads({
    contracts: [...voters.map(votesAddress => (
      {
        ...charityContract,
        functionName: 'getVotersDetail',
        args: [id, votesAddress]
      } as const
    ))],
    enabled: id !== undefined && voters.length > 0,
    watch: true
  })
  return {
    voterRecords,
    voterRecordsLoading
  }
}