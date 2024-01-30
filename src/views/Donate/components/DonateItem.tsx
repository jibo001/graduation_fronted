import React, { PropsWithChildren } from 'react'
import { ProgressBar } from 'antd-mobile'
import { DonateWithPerson } from '@/types/donate'
import { getAge, getSex } from '@/utils'

type Props = {
  donate: DonateWithPerson & {
    isAudited?: boolean
  }
}

const DonateItem: React.FC<PropsWithChildren<Props>> = ({ donate, children }) => {
  return (
    <div className="p-3 mt-4 bg-white rounded-xl">
      <div className="flex items-center gap-4">
        <img src={donate.donate.images[0]} className="w-20 h-20 rounded-xl" alt="" />
        <div className="flex text-sm flex-col justify-between h-20 py-1.5 flex-1">
          <div>{donate.donate.title}</div>
          <ProgressBar
            className="w-full"
            percent={(Number(donate.donate.currentAmount) / Number(donate.donate.targetAmount)) * 100}
            style={{
              '--track-width': '4px',
              '--fill-color': donate.donate.isFinish ? '#f78b32' : '#000000',
            }}
          />
          <div className="text-black">
            已筹<span className="ml-1 text-orange-500">${donate.donate.currentAmount.toString()}</span>
          </div>
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <div className="flex items-center gap-1.5 text-xs mt-2.5">
          <div>{donate.person.name}</div>
          <div>{getSex(donate.person.sex)}性</div>
          <div>{getAge(donate.person.brithYear)}岁</div>
          <div>{donate.donate.sickName}</div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default DonateItem
