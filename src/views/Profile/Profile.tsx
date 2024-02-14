import {
  HandPayCircleOutline,
  // FingerdownOutline,
  LinkOutline,
  CheckCircleOutline,
  AppstoreOutline,
} from 'antd-mobile-icons'
import { Link } from 'react-router-dom'
import { useAccount, useDisconnect } from 'wagmi'
import useRegister from '@/hooks/useRegister'

const Profile = () => {
  const { person } = useRegister()
  const { disconnect } = useDisconnect()
  const { isConnected } = useAccount()

  const menuList = [
    {
      name: '我的求助',
      icon: <AppstoreOutline />,
      path: '/myDonate',
    },
    {
      name: '我的捐款',
      icon: <HandPayCircleOutline />,
      path: '/joinDonate',
    },
    {
      name: '我的审核',
      icon: <CheckCircleOutline />,
      path: '/myAudit',
    },
    // {
    //   name: '我的投票',
    //   icon: <FingerdownOutline />,
    //   path: '/myVote',
    // },
  ]
  return (
    <>
      <div className="flex justify-center">
        <div className="flex items-center justify-center ml-4 rounded-full">
          <img src="/images/logo.svg" alt="" />
        </div>
      </div>
      <div className="px-5">
        <div className="text-sm font-bold text-center">{!isConnected ? '请连接钱包' : person?.name || '未注册'}</div>
        <div className="mt-4 px-4 py-2.5  font-bold text-center bg-white rounded-full justify-between  flex text-xs whitespace-nowrap">
          <div>当前累计捐款：{person?.cumulativeAmount.toString() || 0}</div>
          <div>当前剩余积分：{person?.integral.toString() || 0}</div>
        </div>
      </div>
      <div className="mt-6">
        {menuList.map((menu) => (
          <Link to={menu.path} key={menu.path}>
            <div className="flex items-center px-8 py-4 mb-4 bg-white rounded-full">
              <span className="text-xl text-orange-500">{menu.icon}</span>
              <span className="ml-4 text-sm font-bold">{menu.name}</span>
            </div>
          </Link>
        ))}
        <button
          type="button"
          className="flex items-center w-full px-8 py-4 mt-4 bg-white border-none rounded-full"
          onClick={() => disconnect()}
        >
          <span className="text-xl text-orange-500">
            <LinkOutline />
          </span>
          <span className="ml-4 text-sm font-bold">断开连接</span>
        </button>
      </div>
    </>
  )
}

export default Profile
