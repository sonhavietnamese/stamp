import { useAppKitState, useAppKitTheme, useAppKitEvents, useAppKitAccount, useWalletInfo, useAppKitNetwork } from '@reown/appkit/react'

export function InfoList() {
  const accountState = useAppKitAccount()
  const networkState = useAppKitNetwork()
  const themeState = useAppKitTheme()
  const appKitState = useAppKitState()
  const eventsState = useAppKitEvents()
  const walletState = useWalletInfo()

  return (
    <div className='code-container-wrapper'>
      <section className='code-container'>
        <h2 className='code-container-title'>useAppKitAccount()</h2>
        <div className='code-container-content'>
          <pre>{JSON.stringify(accountState, null, 2)}</pre>
        </div>
      </section>
    </div>
  )
}
