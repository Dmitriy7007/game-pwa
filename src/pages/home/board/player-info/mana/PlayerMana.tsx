import { Badge } from '@/components/ui/Badge'
import cn from 'clsx'

interface Props {
  currentMana: number
  maxMana: number
}

export const PlayerMana = ({ currentMana, maxMana }: Props) => {
  return (
    <div className='flex items-center absolute right-9 bottom-7'>
      <Badge value={currentMana} maxValue={maxMana} color='blue' />
      <div className='flex items-center ml-2'>
        {new Array(maxMana).fill(0).map((_, index) => (
          <div
            key={index}
            className={cn(
              'w-6 h-6 bg-gradient-to-t from-sky-900 rounded-full mx-1 shadow-inner',
              index < currentMana ? 'to-sky-400' : 'to-sky-950'
            )}
          />
        ))}
      </div>
    </div>
  )
}
