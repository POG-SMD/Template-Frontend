import { Button } from './components'
import './index.css'

export const App = () => {

  return (
    <div className='w-full h-screen flex justify-center items-center'>
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

