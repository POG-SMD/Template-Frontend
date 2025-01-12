import { FieldProps } from '@/types'
import { Input } from '../Input'
import { FieldRoot } from './FieldRoot'

export const TextField = ({
  name,
  onChange,
  label,
  value,
  className,
  id,
  disabled,
  errorMessage,
  type = 'text',
  noCapitalize = true,
  ...props
}: FieldProps) => {
  const isInvalid = !!errorMessage

  const triggerOnChange = (fieldValue: string) => {
    if (onChange) {
      const event: React.ChangeEvent<HTMLInputElement> = {
        target: { value: fieldValue, name } as HTMLInputElement,
      } as React.ChangeEvent<HTMLInputElement>
      onChange(event)
    }
  }

  const capitalize = (text: string): string => {
    return text.toLowerCase().replace(/(^\p{L}|\s\p{L})/gu, char => char.toUpperCase())
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (noCapitalize) return triggerOnChange(event.target.value)
    const capitalizedValue = capitalize(event.target.value)
    triggerOnChange(capitalizedValue)
  }

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
      <Input
        onChange={handleChange}
        error={isInvalid}
        value={value}
        id={id ?? name}
        name={name}
        disabled={disabled}
        type={type}
        {...props}
      />
    </FieldRoot>
  )
}