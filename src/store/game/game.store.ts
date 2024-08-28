import { create } from 'zustand'
import { type IGameStore } from './game.store.types'
import { endTurnAction } from './action/end-turn'
import { playCardAction } from './action/play-card'
import { attackCardAction } from './action/attack-card'
import { attackHeroAction } from './action/attack-hero'
import { returnCardAction } from './action/return-card'
import { initialGameData } from './initial-data'
import { startGameAction } from './action/start-game/start-game'
import { randomOpponentPlay } from './action/opponent-core-game/random-opponent-play'

const useGameStore = create<IGameStore>(set => ({
  ...initialGameData,
  isGameStarted: false,
  startGame: () => set(startGameAction()),
  endTurn: () => {
    set(endTurnAction)

    setTimeout(() => {
      set(state => {
        const updatedState = randomOpponentPlay(state)

        setTimeout(() => {
          set(() => endTurnAction(updatedState))
        }, 2500)

        return updatedState
      })
    }, 3000)
  },
  playCard: (cardId: string) => {
    set(state => playCardAction(state, cardId))
  },
  returnCard: (cardId: string) => {
    set(state => returnCardAction(state, cardId))
  },
  attackCard: (attackerId: string, targetId: string) => {
    set(state => attackCardAction(state, attackerId, targetId))
  },
  attackHero: (attackerId: string) => {
    set(state => attackHeroAction(state, attackerId))
  },
}))

export { useGameStore }
