import { useSearchParams } from 'react-router-dom'
import { Button, Input } from 'antd-mobile'
import { useAccount } from 'wagmi'
import { DonateDetailHeader } from '../Donate/DonateDetail'
import useAudit from './hooks/useAudit'
import useDonateDetail from '../Donate/hooks/useDonateDetail'
import { getAuditReason, getAuditStatus } from '@/utils/donate'
import { AUDIT_STATUS } from '@/types/donate'

const AuditDetail = () => {
  const { address } = useAccount()
  const [params] = useSearchParams()
  const id = params.get('id')
  const { loading, setReason, reason, audit } = useAudit()
  const { detail, isLoading } = useDonateDetail(id)
  const auditStatus = getAuditStatus(detail?.donate, address)
  return (
    <div>
      <DonateDetailHeader detail={detail} isLoading={isLoading}>
        {auditStatus === AUDIT_STATUS.NO_AUDIT ? (
          <>
            <Input
              value={reason}
              onChange={(value) => setReason(value)}
              placeholder="请输入原因"
              className="p-1 px-2 mt-5 text-xs border border-black border-solid rounded-full"
              style={{
                '--text-align': 'center',
              }}
            />
            <div className="flex justify-between mt-3 gap-x-3">
              <Button
                className="text-white bg-black rounded-xl"
                block
                loading={loading}
                onClick={() => audit(id, true)}
              >
                <span className="text-sm">通过审核</span>
              </Button>
              <Button
                className="text-white bg-red-500 rounded-xl"
                block
                loading={loading}
                onClick={() => audit(id, false)}
              >
                <span className="text-sm">拒绝审核</span>
              </Button>
            </div>
          </>
        ) : auditStatus === AUDIT_STATUS.AGREE ? (
          <div className="bg-[#f0f3f7] py-1.5 mt-5 rounded-xl text-sm">
            <div className="text-center ">原因:{getAuditReason(detail.donate, address)}</div>
            <div className="mt-2 text-center text-green-500">已同意</div>
          </div>
        ) : (
          <div className="bg-[#f0f3f7] py-1.5 mt-5 rounded-xl text-sm">
            <div className="text-center ">原因:{getAuditReason(detail.donate, address)}</div>
            <div className="mt-3 text-center text-red-500">已拒绝</div>
          </div>
        )}
      </DonateDetailHeader>
    </div>
  )
}

export default AuditDetail
