// import { EnumTypeCard } from '@/types/card.types'
// import type { IGameCard, IGameStore } from '../../game.store.types'
// import { useDamageStore } from '../damage-store'

// export const attackRandomTarget = (
//   state: IGameStore,
//   attacker: IGameCard,
//   isAttackerPlayer: boolean
// ) => {
//   const damageStore = useDamageStore.getState()

//   if(!attacker.isCanAttack) return

//   const tauntCard = state.player.deck.find(card => card.type === EnumTypeCard.taunt && card.isOnBoard)

//   const target = tauntCard || state.player.deck.find(card => card.isOnBoard) || null

// const opponentDeck = isAttackerPlayer ? state.opponent.deck : state.player.deck

// const opponentHero = isAttackerPlayer ? state.opponent : state.player

// }
