import type { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from 'clsx'

import styles from './Button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'primary' | 'secondary' | 'gray' | 'disabled'
  isCircle?: boolean
}

export const Button = ({
  children,
  variant = 'primary',
  isCircle,
  className,
  ...rest
}: Props) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[variant],
        { [styles.isCircle]: isCircle },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
