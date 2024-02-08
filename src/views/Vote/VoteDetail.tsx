import { useSearchParams } from 'react-router-dom'
import useVoteDetail from './hooks/useVoteDetail'

const VoteDetail = () => {
  const [params] = useSearchParams()
  const id = params.get('id')
  const isCurrentAuditor = params.get('isCurrentAuditor')
  const { voteDetail, isLoading } = useVoteDetail(BigInt(id))

  return (
    <div>
      <div className="p-3 bg-white rounded-xl">
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
          </>
        )}
      </div>
    </div>
  )
}

export default VoteDetail
