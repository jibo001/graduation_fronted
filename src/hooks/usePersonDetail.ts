import { Address } from "viem";
import { useContractRead } from "wagmi";
import { getCharityContract } from "@/utils/contractHelpers";
import { isZeroAddress } from "@/utils";

export default function usePersonDetail(address: Address) {
  const charityContract = getCharityContract();
  const { data: personDetail, isLoading } = useContractRead({
    ...charityContract,
    functionName: 'getPersonDetail',
    args: [address],
    enabled: !!address && !isZeroAddress(address)
  })
  return {
    personDetail,
    isLoading
  }
}