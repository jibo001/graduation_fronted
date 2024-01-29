import { MaxUint256 } from "ethers";
import { useAccount, useBalance } from "wagmi";
import useCallWithGasPrice from "@/hooks/useCallWithGasPrice";
import useCatchTxError from "@/hooks/useCatchTxError";
import { getErc20Contract } from "@/utils/contractHelpers";
import { getCharityAddress, getUsdtAddress } from "@/utils/addressHelpers";
import { useTokenApproval } from "./useTokenApproval";

export default function useUsdt() {
  const { address } = useAccount()
  const { fetchWithCatchTxError, loading: usdtApproveLoading } = useCatchTxError()
  const { callWithGasPrice } = useCallWithGasPrice()

  const usdtAddress = getUsdtAddress()
  const charityAddress = getCharityAddress()

  const { data: usdtBalance } = useBalance({
    address,
    token: usdtAddress,
    enabled: !!usdtAddress,
    watch: true
  })
  const { isVaultApproved: usdtIsApprove, setLastUpdated } = useTokenApproval(usdtAddress, charityAddress)

  const handleUsdtApprove = async () => {
    await fetchWithCatchTxError(() =>
      callWithGasPrice(getErc20Contract(usdtAddress), 'approve', [charityAddress, MaxUint256]),
    )

    setLastUpdated()
  }

  return {
    usdtBalance,
    usdtIsApprove,
    handleUsdtApprove,
    usdtApproveLoading
  }
}