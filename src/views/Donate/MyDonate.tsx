import { Button, Empty, Skeleton } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { useAccount } from 'wagmi'
import useMyDonateList from './hooks/useDonateListFromIds'
import DonateItem from './components/DonateItem'
import usePersonDetail from '@/hooks/usePersonDetail'

const MyDonate = () => {
  const { address } = useAccount()
  const { personDetail } = usePersonDetail(address)
  const myDonateIds = personDetail?.myDonateIds || []
  const { donates, isLoading } = useMyDonateList(myDonateIds)
  return (
    <div>
      {isLoading ? (
        new Array(3).map(() => <Skeleton animated className="h-[100px] rounded-xl mt-4" />)
      ) : !donates?.length ? (
        <Empty description="暂无求助" />
      ) : (
        donates?.map((donate) => (
          <Link to={`/donateDetail?id=${donate.donate.id.toString()}`} key={donate.donate.id.toString()}>
            <DonateItem donate={donate}>
              <div className="flex items-center text-xs gap-x-2">
                <div>
                  {donate.donate.auditorReason.some((reason) => !reason) ? (
                    <span className="text-blue-500">审核中</span>
                  ) : donate.donate.auditProgress.every((progress) => progress) ? (
                    <span className="text-green-500">审核通过</span>
                  ) : (
                    <span className="text-red-500">未通过审核</span>
                  )}
                </div>
                <Button className="text-white bg-black rounded-lg" size="mini">
                  查看詳情
                </Button>
                <Button className="text-white bg-black rounded-lg" size="mini">
                  捐赠回访
                </Button>
              </div>
            </DonateItem>
          </Link>
        ))
      )}
    </div>
  )
}

export default MyDonate
