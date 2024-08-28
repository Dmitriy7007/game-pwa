import type { IGameCard } from '@/store/game/game.store.types'
import { BoardCard } from './BoardCard'

interface Props {
  deck: IGameCard[]
  isPlayerSide: boolean
}

export const GridBoardCards = ({ deck, isPlayerSide }: Props) => {
  return (
    <div className='px-20 flex items-center justify-center gap-2'>
      {deck
        .filter(card => card.isOnBoard)
        .map(card => (
          <BoardCard key={card.id} card={card} isPlayerSide={isPlayerSide} />
        ))}
    </div>
  )
}
