import { Button } from '@/components/ui/button/Button'
import { Heading } from '@/components/ui/heading/Heading'
import { Loader } from '@/components/ui/loader/Loader'
import { useGameStore } from '@/store/game/game.store'
import { useTransition } from 'react'

export function WelcomeScreen() {
  const [isPending, startTransition] = useTransition()
  const { startGame } = useGameStore()

  const onClick = () => {
    startTransition(() => {
      startGame()
    })
  }

  return (
    <div className='flex items-center justify-center h-screen flex-col gap-4'>
      <Heading>GAME STOUNE</Heading>
      <Button variant='primary' onClick={onClick}>
        {isPending ? <Loader /> : 'Старт игры'}
      </Button>
    </div>
  )
}
