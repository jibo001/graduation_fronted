import { Address } from "viem";
import { useContractRead } from "wagmi";
import { getCharityContract } from "@/utils/contractHelpers";

export default function usePersonDetail(address: Address) {
  const charityContract = getCharityContract();
  const { data: personInfo, isLoading } = useContractRead({
    ...charityContract,
    functionName: 'getPersonDetail',
    args: [address],
    enabled: !!address
  })
  return {
    personInfo,
    isLoading
  }
}