'use client'

import { type ReactNode } from 'react'

function ContextProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export default ContextProvider
