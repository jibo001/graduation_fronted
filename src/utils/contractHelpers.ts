import { Abi, Address, PublicClient, WalletClient, getContract as viemGetContract } from 'viem'
import { erc20ABI, erc721ABI } from 'wagmi'

// ABI
// import idoStakeABI from '@/config/abi/idoStakeAbi.json'
import charity from '@/config/abi/charity'
import { getCharityAddress } from './addressHelpers'

export const getContract = <TAbi extends Abi | unknown[], TWalletClient extends WalletClient>({
  abi,
  address,
  publicClient,
  signer,
}: {
  abi: TAbi
  address: Address
  chainId?: number
  signer?: TWalletClient
  publicClient?: PublicClient
}) => {
  const c = viemGetContract({
    abi,
    address,
    publicClient,
    walletClient: signer,
  })
  return {
    ...c,
    account: signer?.account,
    chain: signer?.chain,
  }
}

export const getErc20Contract = (address: Address, signer?: WalletClient) =>
  getContract({ abi: erc20ABI, address, signer })

export const getErc721Contract = (address: Address, walletClient?: WalletClient) =>
  getContract({
    abi: erc721ABI,
    address,
    signer: walletClient,
  })

export const getCharityContract = (signer?: WalletClient) =>
  getContract({ abi: charity, address: getCharityAddress(), signer })
