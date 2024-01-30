import { useContractReads } from "wagmi";
import { getCharityContract } from '@/utils/contractHelpers';
import { getDonateDetail } from "@/utils/donate";

export default function useDonateListFromIds(ids: readonly bigint[]) {
  const charityContract = getCharityContract()


  const { data, isLoading } = useContractReads({
    contracts: [...ids?.map(id => (
      {
        ...charityContract,
        functionName: 'getDonateDetail',
        args: [id]
      } as const
    ))],
    enabled: ids.length > 0
  })
  const donates = !isLoading && data?.map(({ result }) => ({
    donate: getDonateDetail(result.donate),
    person: result.person
  }))
  return {
    donates,
    isLoading
  }
}