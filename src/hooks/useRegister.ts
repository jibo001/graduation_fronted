import { useAccount, useContractRead } from "wagmi"
import { Toast } from "antd-mobile";
import { hashMessage } from "ethers";
import { useNavigate } from "react-router-dom";
import { getCharityContract } from "@/utils/contractHelpers"
import useCallWithGasPrice from "./useCallWithGasPrice"
import useCatchTxError from "./useCatchTxError"
import { RegisterParams } from "@/types/donate";

export default function useRegister() {
  const navigate = useNavigate()
  const { address, isConnected } = useAccount();
  const { fetchWithCatchTxError, loading } = useCatchTxError()
  const { callWithGasPrice } = useCallWithGasPrice()

  const charityContract = getCharityContract()

  const { data, refetch } = useContractRead({
    ...charityContract,
    functionName: 'persons',
    args: [address],
    enabled: isConnected
  })
  const isRegister = !!data[0]

  const register = async (registerData: RegisterParams) => {
    await fetchWithCatchTxError(() =>
      callWithGasPrice(charityContract, 'register', [hashMessage(registerData.idCard), registerData.name, registerData.age, registerData.sex]),
    )
    Toast.show('注册成功')
    refetch()
    navigate('/')
  }

  return {
    register,
    isRegister,
    loading
  }
}

