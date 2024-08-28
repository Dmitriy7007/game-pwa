import { Button } from '@/components/ui/button/Button'
import { useGameStore } from '@/store/game/game.store'

export const EndTurnButton = () => {
  const { endTurn, currentTurn } = useGameStore()

  const isOpponentTurn = currentTurn === 'opponent'

  return (
    <Button
      className='absolute -top-7 right-4 z-20'
      style={{ top: -29.25 }}
      variant={isOpponentTurn ? 'disabled' : 'primary'}
      onClick={isOpponentTurn ? () => null : endTurn}
      disabled={isOpponentTurn}
    >
      {isOpponentTurn ? 'Xод противника' : 'Конец хода'}
    </Button>
  )
}
