import { FieldProps } from '@/types'
import { OptionsList, Select } from '../Select'
import { FieldRoot } from './FieldRoot'

interface SelectFieldProps extends Omit<FieldProps, 'value' | 'error' | 'placeholder' | 'onChange'> {
  options: OptionsList[]
  value?: string | number
  placeholder?: string
  onChange: (value: string) => void
  selectClassName?: string
  labelClassName?: string
  icon?: string
}

export const SelectField = ({
  name,
  onChange,
  label,
  value,
  className,
  id,
  disabled,
  errorMessage,
  placeholder,
  icon,
  selectClassName,
  ...props
}: SelectFieldProps) => {
  const isInvalid = !!errorMessage

  return (
    <FieldRoot
      className={className}
      error={isInvalid}
      id={id}
      name={name}
      disabled={disabled}
      label={label}
      errorMessage={errorMessage}
    >
      <Select
        onChange={onChange}
        error={isInvalid}
        value={value}
        id={id ?? name}
        icon={icon}
        disabled={disabled}
        type='text'
        placeholder={placeholder ?? 'Selecione'}
        className={selectClassName}
        {...props}
      />
    </FieldRoot>
  )
}