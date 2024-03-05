import { Toast } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import useCallWithGasPrice from "@/hooks/useCallWithGasPrice";
import useCatchTxError from "@/hooks/useCatchTxError";
import { getCharityContract } from "@/utils/contractHelpers";
import type { DonateParams } from '@/types/donate'
import useCurrentId from "./useCurrentId";
import { _createDonate } from "@/services/donate";

export default function useCreateDonate() {
  const { fetchWithCatchTxError, loading } = useCatchTxError()
  const { callWithGasPrice } = useCallWithGasPrice()
  const navigate = useNavigate()
  const { address } = useAccount()
  const { currentId, currentIdRefetch } = useCurrentId()

  const charityContract = getCharityContract()

  const crateDonate = async (donateParams: DonateParams) => {
    const json = JSON.stringify({
      title: donateParams.title,
      detail: donateParams.detail,
      sickName: donateParams.sickName,
      images: donateParams.images
    })
    const resp = await fetchWithCatchTxError(() =>
      callWithGasPrice(charityContract, 'createDonate', [donateParams.targetAmount, json]),
    )
    if (resp.status === 'success') {
      await _createDonate({
        id: Number(currentId),
        json,
        personAddress: address,
        targetAmount: Number(donateParams.targetAmount)
      })
      currentIdRefetch()
      Toast.show('创建成功，等待审核')
      navigate('/myDonate')
    }
  }
  return {
    loading,
    crateDonate
  };
}