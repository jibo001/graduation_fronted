import { Button, Empty, Skeleton } from 'antd-mobile'
import { Link } from 'react-router-dom'
import DonateItem from './DonateItem'
import useDonateList from '../hooks/useDonateList'

const DonateList = () => {
  const { donates, isLoading } = useDonateList(true)
  return (
    <div className="mt-5">
      <div className="text-xl font-bold">爱心救助</div>
      {isLoading ? (
        new Array(3).map(() => <Skeleton animated className="h-[100px] rounded-xl mt-4" />)
      ) : !donates.length ? (
        <Empty description="暂无求助" />
      ) : (
        donates.map((donate) => (
          <Link to={`donateDetail?id=${donate.donate.id.toString()}`} key={donate.donate.id.toString()}>
            <DonateItem donate={donate}>
              {donate.donate.isFinish ? (
                <Button className="text-white bg-gray-400 rounded-lg" size="mini">
                  已完成
                </Button>
              ) : (
                <Button className="text-white bg-black rounded-lg" size="mini">
                  去帮助
                </Button>
              )}
            </DonateItem>
          </Link>
        ))
      )}
    </div>
  )
}

export default DonateList
