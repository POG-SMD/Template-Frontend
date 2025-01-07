import { IconifyIcon } from '@iconify/react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  icon?: IconifyIcon | string
  inputClassName?: string
}

export interface FieldProps extends InputProps {
  onClickIcon?: () => void
  noMargins?: boolean
  label?: string
  labelClassName?: string
  inputClassName?: string
  errorMessage?: string
  noCapitalize?: boolean
}