import React, { PropsWithChildren } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Donate } from '@/types/donate'
import { mockList } from '@/utils/mock'

const DonateDetail = () => {
  const [params] = useSearchParams()
  const id = params.get('id')
  const detail = mockList.find((item) => item.id === id)
  return (
    <div className="px-3 py-3 bg-white rounded-xl">
      <Title title={detail.title} name={detail.name} />
      <AmountGroup currentAmount={detail.currentAmount} targetAmount={detail.targetAmount} />
      <Content detail={detail.detail} images={detail.images} />
      <ProofMaterial detail={detail} />
    </div>
  )
}

const AmountGroup: React.FC<Pick<Donate, 'currentAmount' | 'targetAmount'>> = ({ currentAmount, targetAmount }) => {
  return (
    <div className="flex items-center justify-between mt-8">
      <div className="flex-1 text-center">
        <div className="text-2xl text-orange-400">{targetAmount}</div>
        <div className="text-xs mt-1.5 text-[#898989]">急需筹款($)</div>
      </div>
      <div className="flex-1 text-center">
        <div className="text-2xl text-orange-400">{currentAmount}</div>
        <div className="text-xs mt-1.5 text-[#898989]">已经筹到($)</div>
      </div>
    </div>
  )
}

const Title: React.FC<Pick<Donate, 'title' | 'name'>> = ({ title, name }) => {
  return (
    <>
      <div className="text-2xl">{title}</div>
      <div className="mt-2 text-xs">
        {name} <span className="text-[#898989]">发起求助</span>
      </div>
    </>
  )
}

const Content: React.FC<Pick<Donate, 'detail' | 'images'>> = ({ detail, images }) => {
  return (
    <>
      <div className="mt-8 text-lg">求助内容</div>
      <div className="mt-2 text-sm text-[#898989]">{detail}</div>
      <div className="grid grid-cols-4 gap-2.5">
        {images.map((image) => (
          <img src={image} key={image} className="mt-2 w-[100%] aspect-square rounded-xl" alt="" />
        ))}
      </div>
    </>
  )
}

const ProofMaterial: React.FC<{ detail: Donate }> = ({ detail }) => {
  return (
    <div className="mt-8">
      <div className="text-lg">证明材料</div>
      <div className="mt-5 bg-[#f1f1f171] px-4 py-6 rounded-xl">
        <div>基本信息</div>
        <InfoWrapper title="患者姓名">{detail.name}</InfoWrapper>
        <InfoWrapper title="所患疾病">{detail.sickName}</InfoWrapper>
        <InfoWrapper title="收款地址">{detail.sickName}</InfoWrapper>
      </div>
    </div>
  )
}

const InfoWrapper: React.FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => {
  return (
    <div className="flex mt-5">
      <div className="w-20">
        <span className="p-1 text-sm text-white bg-black rounded-sm">{title}</span>
      </div>
      <div className="pt-0">{children}</div>
    </div>
  )
}

export default DonateDetail
