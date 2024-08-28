import type { IGameStore } from '../game.store.types'
import { useNotificationStore } from '../../notification/notification.store'
import { EnumTypeCard } from '@/types/card.types'
import { getCardById } from './attack-card'
import { useDamageStore } from './damage-store'

export const attackHeroAction = (
  state: IGameStore,
  attackerId: string
): Partial<IGameStore> => {
  const isAttackerPlayer = state.currentTurn === 'player'
  const opponent = state[isAttackerPlayer ? 'opponent' : 'player']

  const attacker = getCardById(
    attackerId,
    isAttackerPlayer ? state.player.deck : state.opponent.deck
  )

  const opponentTaunt = opponent.deck.find(
    card => card.type === EnumTypeCard.taunt && card.isOnBoard
  )

  if (attacker && attacker.isCanAttack && !opponentTaunt) {
    opponent.health -= attacker.attack
    attacker.isCanAttack = false

    useDamageStore
      .getState()
      .addDamage(isAttackerPlayer ? 'opponent' : 'player', attacker.attack)

    useDamageStore
      .getState()
      .addDamage(isAttackerPlayer ? 'opponent' : 'player', attacker.attack)

    if (opponent.health <= 0) {
      state.isGameOver = true
      state.isGameStarted = false

      useNotificationStore
        .getState()
        .show(
          isAttackerPlayer ? 'Вы победили' : 'Вы проиграли :(',
          isAttackerPlayer ? 'win' : 'lose'
        )
    }
  }

  return {
    player: state.player,
    opponent: state.opponent,
    isGameOver: state.isGameOver,
    isGameStarted: state.isGameStarted,
  }
}
