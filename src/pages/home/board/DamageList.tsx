import { useDamageStore } from '@/store/game/action/damage-store'
import type { TPlayer } from '@/store/game/game.store.types'
import { AnimatePresence, motion } from 'framer-motion'
import cn from 'clsx'

interface Props {
  id: string | TPlayer
  isRight?: boolean
}

export const DamageList = ({ id, isRight = true }: Props) => {
  const { damages } = useDamageStore()
  return (
    <AnimatePresence>
      {(damages[id] || []).map(({ id: damageId, amount }, index) => (
        <motion.div
          key={damageId}
          initial={{ rotate: 0, y: 0, opacity: 1 }}
          animate={{ rotate: 15, y: 50 + index * 40, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className={cn(
            'absolute top-0 w-full text-center text-red-500 font-bold z-52 text-3xl',
            isRight ? '-right-[-60%]' : '-left-[-60%]'
          )}
        >
          -{amount}
        </motion.div>
      ))}
    </AnimatePresence>
  )
}
