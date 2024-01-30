import React, { PropsWithChildren } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Address, usePublicClient } from 'wagmi'
import { Button, Empty, Input } from 'antd-mobile'
import { Donate, DonateWithPerson, Person } from '@/types/donate'
import useDonateDetail from './hooks/useDonateDetail'
import { formatAddress } from '@/utils'
import useUsdt from '@/hooks/useUsdt'
import useHandleDonate from './hooks/useHandleDonate'
import useHelperList from './hooks/useHelperList'
import usePersonsDetail from '@/hooks/usePersonsDetail'

const DonateDetail = () => {
  const [params] = useSearchParams()
  const id = params.get('id')
  const { usdtIsApprove, handleUsdtApprove, usdtApproveLoading } = useUsdt()
  const { donate, loading, amount, setAmount } = useHandleDonate()
  const { detail, isLoading } = useDonateDetail(id)

  const onDonate = () => {
    if (usdtIsApprove) {
      donate(BigInt(id))
    } else {
      handleUsdtApprove()
    }
  }

  return (
    <>
      <DonateDetailHeader detail={detail} isLoading={isLoading}>
        {!detail.donate.isFinish && (
          <>
            <Input
              value={String(amount)}
              onChange={(value) => setAmount(Number(value))}
              type="number"
              placeholder="请输入捐款数额"
              className="p-1 px-2 mt-5 text-xs border border-black border-solid rounded-full"
              style={{
                '--text-align': 'center',
              }}
            />
            <Button
              className="mt-2 text-white bg-black rounded-xl"
              block
              loading={usdtApproveLoading || loading}
              onClick={() => onDonate()}
            >
              <span className="text-sm">{usdtIsApprove ? '捐款' : '授权'}</span>
            </Button>
          </>
        )}
      </DonateDetailHeader>
      {!isLoading && <AuditorReason donate={detail.donate} />}
      {!isLoading && <DonatorList id={id} donatorsAddress={detail.donate.donatorsAddress} />}
    </>
  )
}

export const DonateDetailHeader: React.FC<PropsWithChildren<{ detail: DonateWithPerson; isLoading: boolean }>> = ({
  detail,
  isLoading,
  children,
}) => {
  return (
    <div className="px-3 py-3 bg-white rounded-xl">
      {isLoading ? (
        <div className="flex items-center justify-center h-[200px]">
          <div className="w-10 h-10 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin" />
        </div>
      ) : (
        <>
          <Title title={detail.donate.title} name={detail.person.name} />
          <AmountGroup currentAmount={detail.donate.currentAmount} targetAmount={detail.donate.targetAmount} />
          {children}
          <Content detail={detail.donate.detail} images={detail.donate.images} />
          <ProofMaterial detail={detail} />
        </>
      )}
    </div>
  )
}

const AmountGroup: React.FC<Pick<Donate, 'currentAmount' | 'targetAmount'>> = ({ currentAmount, targetAmount }) => {
  return (
    <div className="flex items-center justify-between mt-8">
      <div className="flex-1 text-center">
        <div className="text-2xl text-orange-500">{targetAmount.toString()}</div>
        <div className="text-xs mt-1.5 text-[#898989]">急需筹款($)</div>
      </div>
      <div className="flex-1 text-center">
        <div className="text-2xl text-orange-500">{currentAmount.toString()}</div>
        <div className="text-xs mt-1.5 text-[#898989]">已经筹到($)</div>
      </div>
    </div>
  )
}

const Title: React.FC<Pick<Donate, 'title'> & Pick<Person, 'name'>> = ({ title, name }) => {
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

const ProofMaterial: React.FC<{ detail: DonateWithPerson }> = ({ detail }) => {
  const client = usePublicClient()

  return (
    <div className="mt-8">
      <div className="text-lg">证明材料</div>
      <div className="mt-3 bg-[#f1f1f171] px-4 py-6 rounded-xl">
        <div>基本信息</div>
        <InfoWrapper title="患者姓名">{detail.person.name}</InfoWrapper>
        <InfoWrapper title="所患疾病">{detail.donate.sickName}</InfoWrapper>
        <InfoWrapper title="收款地址">
          <a
            target="_blank"
            href={`${client.chain.blockExplorers.default.url}/address/${detail.donate.personAddress}`}
            rel="noreferrer"
          >
            <span className="text-blue-500">{formatAddress(detail.donate.personAddress)}</span>
          </a>
        </InfoWrapper>
      </div>
    </div>
  )
}

const InfoWrapper: React.FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => {
  return (
    <div className="flex mt-5">
      <div className="w-20">
        <span className="p-1 text-sm text-white bg-black rounded-lg">{title}</span>
      </div>
      <div className="pt-0">{children}</div>
    </div>
  )
}

const DonatorList: React.FC<{ id: string; donatorsAddress: Address[] }> = ({ id, donatorsAddress }) => {
  const { donatorRecordsWithDetail, loading } = useHelperList(id, donatorsAddress)
  return (
    <div className="p-3 mt-4 bg-white rounded-xl">
      <div className="text-lg">捐赠记录</div>
      {donatorRecordsWithDetail?.length === 0 && <Empty description="暂无捐赠" />}
      {!loading && (
        <div className="mt-2 bg-[#f1f1f171] px-4 py-6 pt-1 rounded-xl">
          {donatorRecordsWithDetail?.map((donator, index) => {
            return (
              <div className="flex items-center justify-between mt-5" key={index}>
                <div className="w-20">
                  <span className="p-1 text-sm text-white bg-black rounded-lg">{donator.name}</span>
                </div>
                <div className="pt-0">${donator.amount?.toString()}</div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

const AuditorReason: React.FC<{ donate: Donate }> = ({ donate }) => {
  const { personsDetail, isLoading } = usePersonsDetail(donate?.auditorsAddress)
  return (
    <div className="p-3 mt-4 bg-white rounded-xl">
      <div className="text-lg">审核人员意见</div>
      <div className="mt-3 bg-[#f1f1f171] px-4 py-6 rounded-xl">
        {!isLoading &&
          personsDetail?.map(({ result: person }, index) => (
            <div className="flex items-center justify-between text-sm" key={person.personAddress}>
              <div>
                审核员{index + 1} : {person.name}
              </div>
              {!donate.auditorReason[index] ? (
                <div>暂未审核</div>
              ) : donate.auditProgress[index] ? (
                <span className="text-green-500">{donate.auditorReason[index]}</span>
              ) : (
                <span className="text-red-500">{donate.auditorReason[index]}</span>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

export default DonateDetail
