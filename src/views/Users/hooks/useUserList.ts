import { useContractRead } from "wagmi";
import { useMemo } from "react";
import { getCharityContract } from "@/utils/contractHelpers";

export default function useUserList() {
  const charityContract = getCharityContract();

  const { data: auditorAddress, isSuccess } = useContractRead({
    ...charityContract,
    functionName: 'getAuditorAddress'
  })

  const { data: users, isLoading } = useContractRead({
    ...charityContract,
    functionName: 'getPersons',
    enabled: isSuccess && auditorAddress.length > 0
  })
  const userList = useMemo(() => users?.filter(user => !auditorAddress.includes(user.personAddress)), [users, auditorAddress])
  const auditorList = useMemo(() => users?.filter(user => auditorAddress.includes(user.personAddress)), [users, auditorAddress])
  userList?.sort((a, b) => Number(a.cumulativeAmount) - Number(b.cumulativeAmount))

  return {
    userList,
    auditorList,
    isLoading
  }

}