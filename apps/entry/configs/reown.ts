import { SolanaAdapter } from '@reown/appkit-adapter-solana'
import { solanaDevnet, type AppKitNetwork } from '@reown/appkit/networks'
import { createAppKit } from '@reown/appkit/react'
import { env } from '@/env'

export const projectId = env.NEXT_PUBLIC_REOWN_PROJECT_ID

export const networks = [solanaDevnet] as [AppKitNetwork, ...AppKitNetwork[]]

export const solanaAdapter = new SolanaAdapter({})

const reownModal = createAppKit({
  adapters: [solanaAdapter],
  networks,
  metadata: {
    name: 'Stamp',
    description: 'Stamp',
    url: 'https://stamp.so',
    icons: ['https://avatars.githubusercontent.com/u/179229932?s=200&v=4'],
  },
  enableWallets: true,
  themeMode: 'dark',
  projectId,
  features: {
    analytics: false,
    swaps: true,
    onramp: true,
    receive: true,
    send: true,
    email: false,
    emailShowWallets: true,
    socials: ['google', 'facebook', 'apple', 'x', 'discord', 'farcaster'],
    history: true,
    allWallets: true,
    legalCheckbox: false,
    smartSessions: false,
    collapseWallets: true,
    walletFeaturesOrder: ['onramp', 'swaps', 'receive', 'send'],
    connectMethodsOrder: ['wallet', 'email', 'social'],
  },
})

export { reownModal }
