import { Button } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { useAccount } from 'wagmi'
import CustomConnectButton from './CustomConnectButton'

const Header = () => {
  const { isConnected } = useAccount()
  return (
    <div className="fixed z-50 flex items-center justify-between w-full px-3 py-2 bg-white">
      <div className="flex items-center">
        <img src="/images/logo.svg" className="w-10" alt="" />
        <div>HopeChain</div>
      </div>
      {!isConnected ? (
        <CustomConnectButton />
      ) : (
        <Link to="/createDonate">
          <Button size="mini" className="text-white bg-black rounded-lg">
            我需要帮助
          </Button>
        </Link>
      )}
    </div>
  )
}

export default Header
