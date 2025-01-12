import { cn } from '@/libs'
import { Icon } from '@iconify/react'

export interface ErrorMessageProp {
  message: string | undefined
  className?: string | undefined
  icon?: string
  disabled?: boolean
}

export const ErrorMessage = ({ message, disabled, icon, className }: ErrorMessageProp) => {
  return (
    message && (
      <p
        className={cn('flex flex-row text-sm items-center gap-1 text-negative', className, {
          'cursor-not-allowed opacity-70': disabled,
        })}
      >
        <Icon icon={icon ?? ''} />
        {message}
      </p>
    )
  )
}