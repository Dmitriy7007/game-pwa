// import { createDeck } from './create-deck'
import type { IGameFnStore, IGameStore, IHero } from './game.store.types'

export const initialPlayerData: IHero = {
  deck: [],
  health: 25,
  mana: 1,
}

export const initialGameData: Omit<IGameStore, keyof IGameFnStore> = {
  player: initialPlayerData,
  opponent: initialPlayerData,
  currentTurn: 'player',
  isGameOver: false,
  isGameStarted: true,
  turn: 1,
}
