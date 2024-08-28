import { useSelectAttacker } from '@/store/game/action/select-attacker'
import { useGameStore } from '@/store/game/game.store'

export const useEnemyTarget = () => {
  const { attackCard, attackHero, currentTurn } = useGameStore()
  const { cardAttackerId, setCardAttackerId } = useSelectAttacker()

  const handleSelectTarget = (targetId?: string, isHero = false) => {
    if (!cardAttackerId) return
    if (currentTurn === 'opponent') return

    if (isHero) {
      attackHero(cardAttackerId)
    } else if (targetId) {
      attackCard(cardAttackerId, targetId)
    }

    setCardAttackerId(null)
  }
  return { handleSelectTarget }
}
