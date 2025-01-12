'use client'

import { InfoList } from '@/components/InfoList'
import { modal } from '@/configs/reown'

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <appkit-button />

      <w3m-button />
      <InfoList />

      <button onClick={() => modal.open()}>Open Modal</button>
    </div>
  )
}
