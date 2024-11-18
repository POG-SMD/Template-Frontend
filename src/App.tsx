import { useTranslation } from 'react-i18next'
import { Button } from './components'
import './index.css'
import './i18n'

export const App = () => {

  const {t} = useTranslation()

  return (
    <div className='w-full h-screen flex justify-center items-center'>

      <h1>{t('global.validation.ok')}</h1>
      <Button
        variant={'destructive'}
        onClick={() => {
          window.alert('Olá mundo!')
        }}
      >
        Clique em mim!
      </Button>
    </div>
  )
}

