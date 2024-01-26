import React from 'react'
import { Button, ProgressBar } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { Donate } from '@/types/donate'

type Props = {
  donate: Donate
}

const DonateItem: React.FC<Props> = ({ donate }) => {
  return (
    <div className="p-3 mt-4 bg-white rounded-xl">
      <div className="flex items-center gap-4">
        <img src={donate.images[0]} className="w-20 h-20 rounded-xl" alt="" />
        <div className="flex text-sm flex-col justify-between h-20 py-1.5 flex-1">
          <div>{donate.title}</div>
          <ProgressBar
            className="w-full"
            percent={(donate.currentAmount / donate.targetAmount) * 100}
            style={{
              '--track-width': '4px',
              '--fill-color': '#000',
            }}
          />
          <div className="text-black">
            已筹<span className="ml-1 text-orange-400">${donate.currentAmount}</span>
          </div>
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <div className="flex items-center gap-1.5 text-xs mt-2.5">
          <div>{donate.name}</div>
          <div>{donate.sex}性</div>
          <div>{donate.age}岁</div>
          <div>{donate.sickName}</div>
        </div>
        <Link to={`donateDetail?id=${donate.id}`}>
          <Button className="text-white bg-black rounded-lg" size="mini">
            去帮助
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default DonateItem
