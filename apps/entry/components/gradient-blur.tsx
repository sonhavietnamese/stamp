import { cn } from '@/libs/utils'

interface GradientBlurProps {
  className?: string
}

export function GradientBlur({ className }: GradientBlurProps) {
  return (
    <div className={cn('bottom-0 gradient-blur', className)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
