import type { ICard } from '@/types/card.types'
import { useState, type CSSProperties } from 'react'
import cn from 'clsx'
import { motion } from 'framer-motion'
import { getStyleRotation } from './get-style-rotation'
import { useGameStore } from '@/store/game/game.store'

interface Props {
  card: ICard
  onClick?: () => void
  isDisabled?: boolean
  isHided?: boolean
  style?: CSSProperties
  index: number
  arrayLength: number
}

export const HandCard = ({
  card,
  onClick,
  isDisabled,
  isHided,
  style,
  index,
  arrayLength,
}: Props) => {
  const { currentTurn, player } = useGameStore()
  const [isHovered, setIsHovered] = useState(false)

  const { rotate, translateY } = getStyleRotation(index, arrayLength, !isHided)

  const initialAnimation = { scale: 1, zIndex: 0, y: translateY, rotate }

  const isDisabledButton =
    isDisabled || (currentTurn === 'opponent' && !isHided)

  return (
    <motion.button
      className={cn(
        'h-40 w-28 inline-block -ml-7 rounded-lg will-change-transform',
        {
          'opacity-60': isDisabledButton,
          'cursor-default h-36 w-24': isHided,
          'shadow-2xl shadow-green-500':
            !isHided && currentTurn === 'player' && player.mana >= card.mana,
        }
      )}
      style={style}
      disabled={isDisabled || (currentTurn === 'opponent' && !isHided)}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 1, zIndex: 0, y: 0 }}
      animate={
        isHovered && !isHided
          ? { scale: 1.3, zIndex: 10, y: -95 }
          : initialAnimation
      }
      transition={{ type: 'keyframes', stiffness: 230, damping: 32 }}
    >
      {/* {isDisabled && (
        <div className='absolute top-0 left-0 w-full h-full bg-black/70'></div>
      )} */}
      <img
        src={isHided ? '/assets/cards/cover.png' : card.imageUrl}
        alt={card.name}
        draggable='false'
        className='will-change-transform'
      />
    </motion.button>
  )
}
