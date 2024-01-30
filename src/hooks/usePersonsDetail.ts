import { Address } from "viem";
import { useContractReads } from "wagmi";
import { getCharityContract } from "@/utils/contractHelpers";

export default function usePersonsDetail(addresses: Address[]) {
  const charityContract = getCharityContract();
  const { data: personsDetail, isLoading } = useContractReads({
    contracts: [...addresses?.map(address => ({
      ...charityContract,
      functionName: 'getPersonDetail',
      args: [address],
    } as const))],
    enabled: addresses.length > 0
  })
  return {
    personsDetail,
    isLoading
  }
}