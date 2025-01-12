import { cn } from '@/libs'
import { FieldProps } from '@/types'
import { Combobox } from '../Combobox'
import { OptionsList } from '../Select'
import { FieldRoot } from './FieldRoot'

interface ComboboxFieldProps extends Omit<FieldProps, 'onChange'> {
  options: OptionsList[]
  value: string
  onChange: (value: string) => void
  align?: 'center' | 'end' | 'start'
  placeholder?: string
  disabled?: boolean
  popoverClassName?: string
}

export const ComboboxField = ({
  options,
  value,
  onChange,
  label,
  name,
  error,
  errorMessage,
  placeholder = 'Selecione uma opção',
  disabled = false,
  className,
  align,
  popoverClassName,
}: ComboboxFieldProps) => {
  return (
    <FieldRoot
      className={cn(className)}
      label={label}
      name={name}
      error={error || !!errorMessage}
      errorMessage={errorMessage}
      disabled={disabled}
    >
      <Combobox
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        label={label}
        name={name}
        errorMessage={errorMessage}
        className={className}
        popoverClassName={cn('flex -right-[150px] mb-11', popoverClassName)}
        align={align}
      />
    </FieldRoot>
  )
}