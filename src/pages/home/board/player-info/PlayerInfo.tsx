import { Badge } from '@/components/ui/Badge'
import { MAX_HP, MAX_MANA } from '@/constants/game/core.constants'
import type { IHero, TPlayer } from '@/store/game/game.store.types'
import cn from 'clsx'
import { useEnemyTarget } from '../board-card/useEnemy.Target'
import { useGameStore } from '@/store/game/game.store'
import { useSelectAttacker } from '@/store/game/action/select-attacker'
import { EnumTypeCard } from '@/types/card.types'
import { DamageList } from '../DamageList'

interface Props {
  player: Omit<IHero, 'deck'>
  typePlayer: TPlayer
}

export const PlayerInfo = ({ player, typePlayer }: Props) => {
  const { handleSelectTarget } = useEnemyTarget()
  const { currentTurn, opponent } = useGameStore()
  const { cardAttackerId } = useSelectAttacker()
  const isPlayer = typePlayer === 'player'
  const opponentTaunt = opponent.deck.find(
    card => card.type === EnumTypeCard.taunt && card.isOnBoard
  )

  return (
    <button
      className={cn('absolute z-50 cursor-default', {
        'bottom-6 left-5': isPlayer,
        'top-3 right-6': !isPlayer,
      })}
      disabled={isPlayer || currentTurn === 'opponent'}
      onClick={() => (isPlayer ? null : handleSelectTarget(undefined, true))}
    >
      <img
        src={
          isPlayer
            ? '/assets/heroes/player.jpeg'
            : '/assets/heroes/opponent.jpg'
        }
        alt={typePlayer}
        className={cn(
          'w-44 h-44 rounded-full object-cover border-4 border-sky-500 transition-colors',
          {
            '!border-red-500 !border-8 shadow-2xl shadow-red-500 !cursor-pointer':
              !isPlayer && cardAttackerId && !opponentTaunt,

            '!border-sky-500 shadow-none !border-4': currentTurn === 'opponent',
          }
        )}
        draggable={false}
      />

      <div
        className={cn('absolute w-full flex justify-center items-center', {
          'bottom-0': isPlayer,
          'bottom-[38px]': !isPlayer,
        })}
      >
        <Badge value={player.health} maxValue={MAX_HP} color='red' />
      </div>
      {!isPlayer && (
        <div className='w-full flex justify-center items-center mt-2.5'>
          <Badge
            value={Math.min(player.mana, MAX_MANA)}
            maxValue={MAX_MANA}
            color='blue'
          />
        </div>
      )}
      <DamageList id={typePlayer} isRight={!isPlayer}></DamageList>
    </button>
  )
}
