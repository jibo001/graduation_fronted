import { Link } from 'react-router-dom'
import { Button, SpinLoading } from 'antd-mobile'
import { VoteDetail } from '@/types/donate'
import useVoteList from './hooks/useVoteList'

const Vote = () => {
  const { voteList, isLoading } = useVoteList()
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
          voteList.map((vote) => <VoteItem key={vote.vote.id.toString()} vote={vote} />)
        )}
      </div>
    </>
  )
}

const VoteItem: React.FC<{ vote: VoteDetail }> = ({ vote }) => {
  return (
    <div className="p-3 mt-4 text-sm bg-white rounded-xl">
      <div className="text-center">
        {vote.isCurrentAuditor ? (
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
      <div className="mt-3">
        <Link to={`/voteDetail?id=${vote.vote.id.toString()}&isCurrentAuditor=${vote.isCurrentAuditor}`}>
          <Button className="text-white bg-black rounded-lg" size="small" block>
            <span className="text-sm">参与投票</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Vote
