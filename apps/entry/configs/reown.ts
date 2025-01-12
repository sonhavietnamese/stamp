import { SolanaAdapter } from '@reown/appkit-adapter-solana'
import { solanaDevnet, type AppKitNetwork } from '@reown/appkit/networks'
import {
  createAppKit
} from '@reown/appkit/react'

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || 'b56e18d47c72ab683b10814fe9495694'

export const networks = [solanaDevnet] as [AppKitNetwork, ...AppKitNetwork[]]

export const solanaAdapter = new SolanaAdapter({})

// Create modal
const modal = createAppKit({
  adapters: [solanaAdapter],
  networks,
  metadata: {
    name: 'Stamp',
    description: 'Stamp',
    url: 'https://stamp.so',
    icons: ['https://avatars.githubusercontent.com/u/179229932?s=200&v=4']
  },
  projectId,
  themeMode: 'light',
  features: {
    analytics: false
  }
})

export {
  modal
}

