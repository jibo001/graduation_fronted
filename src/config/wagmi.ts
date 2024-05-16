import { Chain, configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { injectedWallet, metaMaskWallet, walletConnectWallet, trustWallet } from '@rainbow-me/rainbowkit/wallets'
import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { hardhat } from 'viem/chains'
import chainMap from './constants/chainId'
import { env } from '@/config/env'

export const { chains, publicClient } = configureChains(
  [chainMap[env.chainId]],
  [
    // publicProvider(),
    jsonRpcProvider({
      rpc: (chain: Chain) => {
        if (chain.id === hardhat.id) {
          return { http: `http://127.0.0.1:8545/ ` }
        }
        return { http: `https://${chain.network}.publicnode.com` }
      },
    }),
  ],
)

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains, projectId: env.projectId }),
      walletConnectWallet({ projectId: env.projectId, chains }),
      trustWallet({ chains, projectId: env.projectId }),
    ],
  },
])

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  // webSocketPublicClient,
})
