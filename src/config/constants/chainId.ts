import { Chain } from 'viem'
import { bsc, bscTestnet, mainnet, arbitrum, arbitrumGoerli, sepolia, hardhat } from 'wagmi/chains'

const chainMap: Record<number, Chain> = {
  31337: hardhat,
  56: bsc,
  97: bscTestnet,
  1: mainnet,
  42161: arbitrum,
  421613: arbitrumGoerli,
  11155111: sepolia,
}

export default chainMap
