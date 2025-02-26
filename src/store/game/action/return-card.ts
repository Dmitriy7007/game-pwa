import type { IGameStore } from '../game.store.types'

export const returnCardAction = (
  state: IGameStore,
  cardId: string
): Partial<IGameStore> => {
  const isPlayerTurn = state.currentTurn === 'player'
  const currentPlayer = isPlayerTurn ? state.player : state.opponent

  const currentCard = currentPlayer.deck.find(card => card.id === cardId)

  if (currentCard && currentCard.isOnBoard) {
    currentCard.isOnBoard = false
    currentCard.isOnHand = true
    currentPlayer.mana += currentCard.mana
  }

  return isPlayerTurn ? { player: currentPlayer } : { opponent: currentPlayer }
}
