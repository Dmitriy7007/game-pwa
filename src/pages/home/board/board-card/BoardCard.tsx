import type { IGameCard } from '@/store/game/game.store.types'
import { motion } from 'framer-motion'
import cn from 'clsx'
import { useGameStore } from '@/store/game/game.store'
import { useEnemyTarget } from './useEnemy.Target'
import { useSelectAttacker } from '@/store/game/action/select-attacker'
import { DamageList } from '../DamageList'

interface Props {
  card: IGameCard
  isPlayerSide: boolean
}

export const BoardCard = ({ card, isPlayerSide }: Props) => {
  const { handleSelectTarget } = useEnemyTarget()
  const { returnCard, currentTurn } = useGameStore()
  const { cardAttackerId, setCardAttackerId } = useSelectAttacker()

  const handleClick = (cardId: string) => {
    if (isPlayerSide) {
      if (card.isCanAttack) {
        setCardAttackerId(cardId)
      } else if (card.IsPlayedThisTurn) {
        returnCard(cardId)
      }
    } else {
      handleSelectTarget(cardId)
    }
  }

  const isPlayerSelectAttacker = isPlayerSide && cardAttackerId === card.id

  return (
    <div className='flex flex-col justify-center items-center relative'>
      <motion.button
        className={cn(
          'h-[16,5rem] w-44 rounded-lg border-b-8 transition-colors border-transparent relative',
          {
            'cursor-default': !card.isCanAttack,
            'cursor-not-allowed !border-transparent shadow-none':
              currentTurn === 'opponent',
            ' !border-green-500 shadow-2xl shadow-green-500':
              card.isCanAttack &&
              !(cardAttackerId === card.id) &&
              isPlayerSide &&
              currentTurn === 'player',
            '!border-primary  shadow-2xl shadow-primary':
              isPlayerSelectAttacker,
            '!border-red-500 shadow-2xl shadow-red-500 ':
              !isPlayerSide && cardAttackerId,
          }
        )}
        initial={{ scale: 0.5, rotate: -15, y: -200, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 1 }}
        onClick={() => (currentTurn !== 'player' ? null : handleClick(card.id))}
      >
        <img src={card.imageUrl} alt={card.name} draggable='false' />
        <DamageList id={card.id} isRight />
      </motion.button>
      <div className='text-lg absolute z-5 bottom-0 flex items-center'>
        Очки жизни: {card.health}
      </div>
    </div>
  )
}
