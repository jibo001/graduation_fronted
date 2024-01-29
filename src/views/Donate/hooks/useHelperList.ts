import { Address } from "viem";
import { useContractReads } from "wagmi";
import { getCharityContract } from '@/utils/contractHelpers';

export default function useHelperList(id: string, donators: Address[]) {
  const charityContract = getCharityContract()

  const { data: donatorRecords, isLoading: donatorRecordsLoading } = useContractReads({
    contracts: [...donators?.map(donator => (
      {
        ...charityContract,
        functionName: 'userDonateItemAmount',
        args: [donator, id]
      } as const
    ))],
    enabled: donators.length > 0
  })

  const { data: donatorsDetail, isLoading: donatorsDetailLoading } = useContractReads({
    contracts: [...donators?.map(donator => (
      {
        ...charityContract,
        functionName: 'getPersonDetail',
        args: [donator]
      } as const
    ))],
    enabled: donators.length > 0
  })


  const loading = donatorRecordsLoading && donatorsDetailLoading

  const donatorRecordsWithDetail = !loading && donators.map((donator, index) => ({
    donator,
    amount: donatorRecords[index].result,
    name: donatorsDetail[index].result.name
  }))


  return {
    donatorRecordsWithDetail,
    loading
  }
}