import { useMemo } from 'react'
import { UAParser } from 'ua-parser-js'

export function useUa() {
  const parser = new UAParser()
  const result = parser.getResult()

  const isMobile = useMemo(() => result.device.type === 'mobile', [result])

  return { isMobile }
}
