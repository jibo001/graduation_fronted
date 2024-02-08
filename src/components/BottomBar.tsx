import { HeartOutline, UserOutline, FlagOutline, TeamOutline } from 'antd-mobile-icons'
import { Link, useLocation } from 'react-router-dom'

const BottomBar = () => {
  const location = useLocation()
  const tabs = [
    {
      name: '捐赠',
      path: '/',
      icon: <HeartOutline />,
    },
    {
      name: '投票',
      path: '/vote',
      icon: <FlagOutline />,
    },
    {
      name: '审核人员公示',
      path: '/users',
      icon: <TeamOutline />,
    },
    {
      name: '我的',
      path: '/profile',
      icon: <UserOutline />,
    },
  ]

  return (
    <div className="absolute bottom-0 w-full py-3 bg-white rounded-t-xl bottom-tab">
      <div className="flex items-center justify-center">
        {tabs.map((tab) => (
          <Link to={tab.path} key={tab.name} className={`flex flex-col items-center justify-center flex-1 `}>
            <div className={`${location.pathname === tab.path && 'text-orange-500 font-bold'} text-center`}>
              <span className="text-base">{tab.icon}</span>
              <div className="mt-1 text-xs">{tab.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BottomBar
