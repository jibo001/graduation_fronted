import { Toast } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import useCallWithGasPrice from "@/hooks/useCallWithGasPrice";
import useCatchTxError from "@/hooks/useCatchTxError";
import { getCharityContract } from "@/utils/contractHelpers";
import type { DonateParams } from '@/types/donate'

export default function useCreateDonate() {
  const { fetchWithCatchTxError, loading } = useCatchTxError()
  const { callWithGasPrice } = useCallWithGasPrice()
  const navigate = useNavigate()

  const charityContract = getCharityContract()

  const crateDonate = async (donateParams: DonateParams) => {
    const json = JSON.stringify({
      title: donateParams.title,
      detail: donateParams.detail,
      sickName: donateParams.sickName,
      images: donateParams.images
    })
    await fetchWithCatchTxError(() =>
      callWithGasPrice(charityContract, 'createDonate', [donateParams.targetAmount, json]),
    )
    Toast.show('创建成功，等待审核')
    navigate('/')
  }
  return {
    loading,
    crateDonate
  };
}