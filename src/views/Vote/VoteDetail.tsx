import { useSearchParams } from 'react-router-dom'
import { Button, Input } from 'antd-mobile'
import { Address, useAccount } from 'wagmi'
import { useCountDown } from 'ahooks'
import useVoteDetail from './hooks/useVoteDetail'
import usePersonDetail from '@/hooks/usePersonDetail'
import useVote from './hooks/useVote'
import useVoteFinish from './hooks/useVoteFinish'
import useVoterRecords from './hooks/useVoterRecords'

const VoteDetail = () => {
  const [params] = useSearchParams()
  const id = params.get('id')
  const { address } = useAccount()
  const { personDetail } = usePersonDetail(address)
  const { voteDetail, isLoading } = useVoteDetail(BigInt(id))
  const { vote, loading, setNum, num } = useVote()
  const { voteFinish, loading: finishLoading } = useVoteFinish()
  const [countdown, formattedRes] = useCountDown({
    leftTime: Number(voteDetail?.vote.endTime) * 1000 - Date.now(),
  })
  const { days, hours, minutes, seconds } = formattedRes
  const isCurrentAuditor = params.get('isCurrentAuditor')
  return (
    <div>
      <div className="p-3 text-sm bg-white rounded-xl">
        {!isLoading && (
          <>
            <div className="text-center">
              {isCurrentAuditor === 'true' ? (
                <span className="text-red-500">废除审核员</span>
              ) : (
                <span className="text-green-500">成为审核员</span>
              )}
            </div>
            <div className="flex items-center justify-between mt-3">
              <div>参选人：{voteDetail.targetPerson.name}</div>
              <div>发起人：{voteDetail.promoter.name}</div>
            </div>
            <div className="mt-2">原因：{voteDetail.vote.reason}</div>
            <div className="flex items-center justify-between mt-2">
              <div>
                同意票数：<span className="text-green-500">{voteDetail.vote.agreeNum.toString()}</span>
              </div>
              <div>
                反对票数：<span className="text-red-500">{voteDetail.vote.disagreeNum.toString()}</span>
              </div>
            </div>

            {!!countdown && (
              <div>
                <Input
                  value={num}
                  onChange={(value) => setNum(value)}
                  type="number"
                  placeholder="请输入投票数量"
                  className="p-1 px-2 mt-3 text-xs border border-black border-solid rounded-full"
                  style={{
                    '--text-align': 'center',
                  }}
                />
                <div className="flex items-center justify-between text-xs mt-1.5">
                  <div>
                    {countdown ? (
                      <span>
                        距离投票结束：{days}天{hours}时{minutes}分{seconds}秒
                      </span>
                    ) : (
                      <span>投票已结束</span>
                    )}
                  </div>
                  <div className="mr-1.5 ">可投票数：{personDetail.integral.toString()}</div>
                </div>
              </div>
            )}
            <div className="flex justify-between mt-3 gap-x-3">
              {countdown ? (
                <>
                  <Button
                    className="text-white bg-black rounded-xl"
                    loading={loading}
                    block
                    onClick={() => vote(id, true)}
                  >
                    <span className="text-sm">同意</span>
                  </Button>
                  <Button
                    className="text-white bg-red-500 rounded-xl"
                    loading={loading}
                    block
                    onClick={() => vote(id, false)}
                  >
                    <span className="text-sm">拒绝</span>
                  </Button>
                </>
              ) : !voteDetail.vote.isFinish ? (
                <Button
                  className="text-white bg-black rounded-xl"
                  loading={finishLoading}
                  block
                  onClick={() => voteFinish(id)}
                >
                  <span className="text-sm">结束投票</span>
                </Button>
              ) : (
                <div className="flex-1 text-center bg-[#f0f3f7] py-2 rounded-xl">
                  {voteDetail.vote.agreeNum > voteDetail.vote.disagreeNum ? (
                    <span className="text-green-500">投票结果：投票成功</span>
                  ) : (
                    <span className="text-red-500">投票结果：投票失败</span>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {voteDetail?.vote.voters.length > 0 && <VoterList voters={voteDetail?.vote.voters} id={BigInt(id)} />}
    </div>
  )
}

const VoterList: React.FC<{ voters: readonly Address[]; id: bigint }> = ({ voters, id }) => {
  const { voterRecords, voterRecordsLoading } = useVoterRecords(voters, id)
  return (
    <div className="mt-3">
      用户投票记录
      <div className="p-3 mt-3 bg-white rounded-xl">
        <div className=" flex flex-col gap-y-1.5">
          {!voterRecordsLoading &&
            voterRecords.map(({ result: voter }, index) => (
              <div className="flex items-center justify-between text-sm" key={index}>
                <div>{voter.person.name}</div>
                <div className="flex flex-col gap-1.5">
                  <div className="text-green-500">同意票数：{voter.voterNumDetail.aggreeNum.toString()}</div>
                  <div className="text-red-500">拒绝票数：{voter.voterNumDetail.disagreeNum.toString()}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default VoteDetail
