import { useState } from "react";
import { Toast } from "antd-mobile";
import { Address, useAccount } from "wagmi";
import useCallWithGasPrice from "@/hooks/useCallWithGasPrice";
import useCatchTxError from "@/hooks/useCatchTxError";
import { getCharityContract } from "@/utils/contractHelpers";
import { _donateHandler } from "@/services/donate";

export default function useHandleDonate() {
  const { address } = useAccount()
  const [amount, setAmount] = useState<number>()
  const charityContract = getCharityContract()

  const { fetchWithCatchTxError, loading } = useCatchTxError()
  const { callWithGasPrice } = useCallWithGasPrice()



  const donate = async (id: bigint, toAddress: Address) => {
    const resp = await fetchWithCatchTxError(() =>
      callWithGasPrice(charityContract, 'donateHandler', [id, amount]),
    )
    if (resp.status === 'success') {
      _donateHandler({
        donateId: Number(id),
        amount,
        address,
        toAddress,
        hash: resp.transactionHash
      })

      Toast.show("捐赠成功")
      setAmount(undefined)
    }

  }
  return {
    loading,
    donate,
    setAmount,
    amount
  };
}