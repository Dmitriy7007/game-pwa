import { CARDS } from '@/constants/game/cards.constans'
import type { IGameCard, TPlayer } from '../../game.store.types'

export function createDeck(typePlayer: TPlayer): IGameCard[] {
  return CARDS.map((card, index) => ({
    ...card,
    id: index + 1 + '_' + typePlayer,
    isTaken: false,
    isOnHand: false,
    isOnBoard: false,
    isCanAttack: false,
    IsPlayedThisTurn: false,
  }))
}
