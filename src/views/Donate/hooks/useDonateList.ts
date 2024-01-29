import { useContractRead } from 'wagmi';
import { getCharityContract } from '@/utils/contractHelpers';
import { DonateWithPerson } from '@/types/donate';
import { getDonateDetail } from '@/utils/donate';

export default function useDonateList(isPassed: boolean) {
  const charityContract = getCharityContract();

  const { data: currentId, isSuccess } = useContractRead({
    ...charityContract,
    functionName: 'currentId'
  })

  const { data: donateList, isSuccess: getDonateListIsSuccess, isLoading } = useContractRead({
    ...charityContract,
    functionName: 'getDonates',
    args: [BigInt(0), BigInt(Number(currentId || 1) - 1)],
    enabled: isSuccess && Number(currentId) !== 0
  })
  const donates: DonateWithPerson[] = getDonateListIsSuccess ? donateList.filter(donateWithPerson => donateWithPerson.donate.isPassed === isPassed).map(
    subDonateWithPerson => ({
      donate: getDonateDetail(subDonateWithPerson.donate),
      person: subDonateWithPerson.person
    })
  ) : []


  return {
    donates,
    isLoading
  }
}