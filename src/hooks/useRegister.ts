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

  const { data, refetch, isLoading } = useContractRead({
    ...charityContract,
    functionName: 'getPersonDetail',
    args: [address],
    enabled: isConnected,
  })

  const person = data

  const isRegister = !isLoading && isConnected && !!data.idCard

  const register = async (registerData: RegisterParams) => {
    await fetchWithCatchTxError(() =>
      callWithGasPrice(charityContract, 'register', [hashMessage(registerData.idCard), registerData.name, registerData.birthYear, registerData.sex]),
    )
    refetch()
    Toast.show('注册成功')
    navigate('/')
  }

  return {
    person,
    register,
    isRegister,
    loading
  }
}

