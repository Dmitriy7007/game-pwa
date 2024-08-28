import type { PropsWithChildren } from 'react'
import cn from 'clsx'

interface Props extends PropsWithChildren {
  isPlayer: boolean
}

export const SectionSide = ({ isPlayer, children }: Props) => {
  return (
    <section
      className={cn('absolute w-full left-0', {
        'pt-32 top-0 pb-7 flex flex-col justify-end': !isPlayer,
        'pb-32 bottom-0 pt-7': isPlayer,
      })}
      style={{ height: 'calc(50vh - 0.5px)' }}
    >
      {children}
    </section>
  )
}
