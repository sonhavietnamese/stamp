'use client'

import { useUa } from '@/hooks/use-ua'

export default function DeviceWrapper({ children }: { children: React.ReactNode }) {
  const { isMobile } = useUa()

  if (!isMobile) {
    return <div className='w-dvw h-dvh'>Only mobile is supported</div>
  }

  return <div className='w-dvw h-dvh'>{children}</div>
}
