import { useAccount } from 'wagmi'
import { Button, Empty, Skeleton } from 'antd-mobile'
import { Link } from 'react-router-dom'
import usePersonDetail from '@/hooks/usePersonDetail'
import DonateItem from './components/DonateItem'
import useDonateListFromIds from './hooks/useDonateListFromIds'

const JoinDonate = () => {
  const { address } = useAccount()
  const { personDetail } = usePersonDetail(address)
  const myDonateIds = personDetail?.donatedIds || []
  const { donates, isLoading } = useDonateListFromIds(myDonateIds)
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
              <Button className="text-white bg-black rounded-lg" size="mini">
                查看詳情
              </Button>
            </DonateItem>
          </Link>
        ))
      )}
    </div>
  )
}

export default JoinDonate
