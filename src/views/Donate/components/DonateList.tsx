import { mockList } from '@/utils/mock'
import DonateItem from './DonateItem'
import { Donate } from '@/types/donate'

const DonateList = () => {
  return (
    <div className="mt-5">
      <div className="text-xl font-bold">爱心救助</div>
      {mockList.map((donate) => (
        <DonateItem key={donate.id} donate={donate} />
      ))}
    </div>
  )
}

export default DonateList
