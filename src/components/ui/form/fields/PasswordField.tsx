import { FieldProps } from '@/types'
import { useState } from 'react'
import { Input } from '../Input'
import { FieldRoot } from './FieldRoot'
import { Icon } from '@iconify/react/dist/iconify.js'

export const PasswordField = ({ name, onChange, label, value, className, id, disabled, errorMessage, ...props }: FieldProps) => {
  const [visible, setVisible] = useState(false)
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
      <div className='relative'>
        <Input
          onChange={onChange}
          error={isInvalid}
          value={value}
          id={id ?? name}
          disabled={disabled}
          type={visible ? 'text' : 'password'}
          placeholder='*********'
          {...props}
        />
        <button
          type='button'
          disabled={disabled}
          onClick={() => !disabled && setVisible(!visible)}
          className='absolute cursor-pointer right-2 top-2 lg:top-2.5 text-gray-400  focus:text-gray-700'
        >
          {visible ? (
            <Icon icon='lucide:eye' fontSize={20} className={isInvalid ? 'text-negative' : ''} />
          ) : (
            <Icon icon='lucide:eye-off' fontSize={20} className={isInvalid ? 'text-negative' : ''} />
          )}
        </button>
      </div>
    </FieldRoot>
  )
}