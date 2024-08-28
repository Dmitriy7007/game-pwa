import { MAX_HAND_CARDS } from '@/constants/game/core.constants'
import type { IGameCard, IHero } from '../game.store.types'

export const drawCardsAction = (currentPlayer: IHero) => {
  const cardOnHands = currentPlayer.deck.filter(card => card.isOnHand).length
  const cardsNeeded = MAX_HAND_CARDS - cardOnHands
  let drawnCards = 0

  const updatedDeck = currentPlayer.deck.map((card: IGameCard) => {
    if (!card.isTaken && !card.isOnHand && drawnCards < cardsNeeded) {
      drawnCards++
      return {
        ...card,
        isTaken: true,
        isOnHand: true,
      }
    }
    return card
  })

  return updatedDeck
}
