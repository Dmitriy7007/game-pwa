import type { ICard } from '@/types/card.types'

export type TPlayer = 'player' | 'opponent'

export interface IGameCard extends ICard {
  id: string
  isOnHand: boolean
  isOnBoard: boolean
  isTaken: boolean
  isCanAttack: boolean
  IsPlayedThisTurn: boolean
}

export interface IHero {
  health: number
  mana: number
  deck: IGameCard[]
}

export interface IGameFnStore {
  startGame: () => void
  endTurn: () => void
  playCard: (cardId: string) => void
  attackCard: (attackerId: string, targetId: string) => void
  attackHero: (attackerId: string) => void
  returnCard: (cardId: string) => void
}

export interface IGameStore extends IGameFnStore {
  player: IHero
  opponent: IHero
  isGameStarted: boolean
  isGameOver: boolean
  currentTurn: TPlayer
  turn: number
}
