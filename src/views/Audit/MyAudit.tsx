import { Link } from 'react-router-dom'
import { Button, Empty, Skeleton } from 'antd-mobile'
import useAuditList from './hooks/useAuditList'
import DonateItem from '../Donate/components/DonateItem'
import { AUDIT_STATUS } from '@/types/donate'

const MyAudit = () => {
  const { auditList, isLoading } = useAuditList()
  return (
    <div>
      {isLoading ? (
        new Array(3).map(() => <Skeleton animated className="h-[100px] rounded-xl mt-4" />)
      ) : !auditList.length ? (
        <Empty description="暂无审核" />
      ) : (
        auditList.map((donate) => (
          <Link to={`/auditDetail?id=${donate.donate.id.toString()}`} key={donate.donate.id.toString()}>
            <DonateItem donate={donate}>
              {donate.auditStatus === AUDIT_STATUS.NO_AUDIT ? (
                <Button className="text-white bg-black rounded-lg" size="mini">
                  去审核
                </Button>
              ) : donate.auditStatus === AUDIT_STATUS.AGREE ? (
                <span className="text-sm text-green-500">已同意</span>
              ) : (
                <span className="text-sm text-orange-500">已拒绝</span>
              )}
            </DonateItem>
          </Link>
        ))
      )}
    </div>
  )
}

export default MyAudit
