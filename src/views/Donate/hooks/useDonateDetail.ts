import { useContractRead } from 'wagmi';
import { getCharityContract } from '@/utils/contractHelpers';
import { getDonateDetail } from '@/utils/donate';

export default function useDonateDetail(id: string) {
  const charity = getCharityContract()
  const { data: detail, isLoading } = useContractRead({
    ...charity,
    functionName: 'getDonateDetail',
    args: [BigInt(id)],
    enabled: !!id,
    watch: true
  })

  return {
    detail: {
      donate: getDonateDetail(detail?.donate),
      person: detail?.person
    },
    isLoading
  };
}