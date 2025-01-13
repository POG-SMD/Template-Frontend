import * as React from 'react'
import { cn } from '@/libs'
import { InputProps } from '@/types'

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, error, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'text-black flex h-10 w-full rounded-lg border placeholder:text-sm border-slate-700 p-3 file:border-0 bg-transparent ring-inset ring-primary focus-visible:border-primary focus-visible:ring-1 placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:opacity-75',
        className,
        {
          'text-negative border-negative focus-visible:ring-negative': error,
        }
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }