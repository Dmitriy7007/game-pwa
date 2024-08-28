import type { PropsWithChildren } from 'react'

export const Heading = ({ children }: PropsWithChildren) => {
  return (
    <h1 className='text-6xl font-bold text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
      {children}
    </h1>
  )
}
