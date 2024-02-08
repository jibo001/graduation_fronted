import { Button, CenterPopup, TextArea } from 'antd-mobile'
import { Person } from '@/types/donate'
import useUserList from './hooks/useUserList'
import useStartVote from './hooks/useStartVote'

const Users = () => {
  const { auditorList, userList, isLoading } = useUserList()
  return (
    <div>
      <div>当前审核人员</div>
      {!isLoading && auditorList?.map((user) => <UserItem key={user.idCard} user={user} isAuditor />)}
      <div className="mt-5">用户捐赠榜</div>
      {!isLoading && userList?.map((user) => <UserItem key={user.idCard} user={user} isAuditor={false} />)}
    </div>
  )
}

const UserItem: React.FC<{ user: Person; isAuditor: boolean }> = ({ user, isAuditor }) => {
  const { visible, setVisible, loading, startVote, reason, setReason } = useStartVote()

  return (
    <>
      <div className="p-3 mt-3 text-sm bg-white rounded-xl">
        <div>姓名：{user.name}</div>
        <div className="flex items-center justify-between mt-2">
          <span>捐赠求助次数：{user.donatedIds.length}</span>
          {isAuditor ? (
            <Button
              size="small"
              className="text-white bg-red-500 rounded-lg"
              disabled={user.isVoting}
              onClick={() => setVisible(true)}
            >
              <span className="text-sm">{user.isVoting ? '投票中' : '投票废除审核员'}</span>
            </Button>
          ) : (
            <Button
              size="small"
              className="text-white bg-green-500 rounded-lg"
              disabled={user.isVoting}
              onClick={() => setVisible(true)}
            >
              <span className="text-sm">{user.isVoting ? '投票中' : '投票选为审核员'}</span>
            </Button>
          )}
        </div>
        <div className="mt-2">总捐赠金额：{user.cumulativeAmount.toString()}</div>
      </div>
      <CenterPopup
        visible={visible}
        onMaskClick={() => {
          if (!loading) setVisible(false)
        }}
      >
        <div className="p-5">
          <TextArea
            onChange={(value) => setReason(value)}
            value={reason}
            className="border border-solid border-[#e3e3e3] p-1 rounded-md"
            placeholder="请输入投票原因"
          />
          <Button
            onClick={() => startVote(user.personAddress)}
            block
            type="submit"
            size="small"
            className="mt-3 text-white bg-black rounded-lg"
            loading={loading}
          >
            <span className="text-sm">提交</span>
          </Button>
        </div>
      </CenterPopup>
    </>
  )
}

export default Users
