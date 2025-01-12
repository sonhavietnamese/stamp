import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAddress(address: string | undefined, length = 4) {
  if (!address) return ''

  return `${String(address).slice(0, length)}...${String(address).slice(-length)}`
}

export function computeUsername(email: string | undefined | null) {
  if (!email) return ''

  return email.split('@')[0]
}
