import { useState } from "react";
import { Toast } from "antd-mobile";
import useCallWithGasPrice from "@/hooks/useCallWithGasPrice";
import useCatchTxError from "@/hooks/useCatchTxError";
import { getCharityContract } from "@/utils/contractHelpers";

export default function useHandleDonate() {

  const [amount, setAmount] = useState<number>()
  const charityContract = getCharityContract()

  const { fetchWithCatchTxError, loading } = useCatchTxError()
  const { callWithGasPrice } = useCallWithGasPrice()



  const donate = async (id: bigint) => {
    await fetchWithCatchTxError(() =>
      callWithGasPrice(charityContract, 'donateHandler', [id, amount]),
    )
    Toast.show("捐赠成功")
    setAmount(undefined)
  }
  return {
    loading,
    donate,
    setAmount,
    amount
  };
}