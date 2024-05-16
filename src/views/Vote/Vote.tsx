import { Link } from 'react-router-dom'
import { Button, SpinLoading } from 'antd-mobile'
import { useCountDown } from 'ahooks'
// import { reverse } from 'lodash'
import { VoteDetail } from '@/types/donate'
import useVoteList from './hooks/useVoteList'

const Vote = () => {
  const { votes, isLoading } = useVoteList()
  // const _votes = reverse(votes)
  return (
    <>
      <div>
        <div>当前投票</div>
        {isLoading ? (
          <div className="flex items-center justify-center w-screen h-full mt-5">
            <SpinLoading
              className="text-theme-primary"
              style={{
                '--color': '#000',
                '--size': '25px',
              }}
            />
          </div>
        ) : (
          votes?.map(({ result: vote }) => <VoteItem key={vote.vote.id.toString()} vote={vote} />)
        )}
      </div>
    </>
  )
}

const VoteItem: React.FC<{ vote: VoteDetail }> = ({ vote }) => {
  const [countdown, formattedRes] = useCountDown({
    leftTime: Number(vote?.vote.endTime) * 1000 - Date.now(),
  })
  const { days, hours, minutes, seconds } = formattedRes
  return (
    <div className="p-3 mt-4 text-sm bg-white rounded-xl">
      <div className="text-center">
        {vote.vote.isCurrentAuditor ? (
          <span className="text-red-500">废除审核员</span>
        ) : (
          <span className="text-green-500">成为审核员</span>
        )}
      </div>
      <div className="flex items-center justify-between mt-3">
        <div>参选人：{vote.targetPerson.name}</div>
        <div>发起人：{vote.promoter.name}</div>
      </div>
      <div className="mt-2">原因：{vote.vote.reason}</div>
      <div className="flex items-center justify-between mt-2">
        <div>
          同意票数：<span className="text-green-500">{vote.vote.agreeNum.toString()}</span>
        </div>
        <div>
          反对票数：<span className="text-red-500">{vote.vote.disagreeNum.toString()}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        {countdown ? (
          <div>
            {' '}
            距离投票结束：{days}天{hours}时{minutes}分{seconds}秒
          </div>
        ) : (
          <div>
            {vote.vote.isFinish ? (
              <div>
                {vote.vote.agreeNum > vote.vote.disagreeNum ? (
                  <span className="text-green-500">投票结果：投票成功</span>
                ) : (
                  <span className="text-red-500">投票结果：投票失败</span>
                )}
              </div>
            ) : (
              '待确认投票结果'
            )}
          </div>
        )}
        <Link to={`/voteDetail?id=${vote.vote.id.toString()}&isCurrentAuditor=${vote.vote.isCurrentAuditor}`}>
          <Button className="text-white bg-black rounded-lg" size="small" block>
            <span className="text-sm">查看详情</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Vote
