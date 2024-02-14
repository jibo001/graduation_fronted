import useCallWithGasPrice from "@/hooks/useCallWithGasPrice"
import useCatchTxError from "@/hooks/useCatchTxError"
import { getCharityContract } from "@/utils/contractHelpers"

export default function useVoteFinish() {
  const { fetchWithCatchTxError, loading } = useCatchTxError()
  const { callWithGasPrice } = useCallWithGasPrice()

  const charityContract = getCharityContract()

  const voteFinish = async (id: string) => {
    await fetchWithCatchTxError(() => callWithGasPrice(charityContract, 'voteFinish', [BigInt(id)]))
  }
  return {
    loading,
    voteFinish,
  }
}