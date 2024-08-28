import cn from 'clsx'

interface IBadge {
  value: number
  maxValue: number
  color: 'blue' | 'red'
}
export const Badge = ({ value, maxValue, color }: IBadge) => {
  return (
    <div
      className={cn(
        'bg-gradient-to-t px-4 rounded-2xl shadow-lg w-max [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]',
        {
          'from-sky-700 to-sky-400': color === 'blue',
          'from-red-700 to-red-400': color === 'red',
        }
      )}
    >
      {value} / {maxValue}
    </div>
  )
}
