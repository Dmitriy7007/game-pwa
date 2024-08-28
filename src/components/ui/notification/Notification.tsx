import { motion } from 'framer-motion'
import { useNotificationStore } from '@/store/notification/notification.store'
import cn from 'clsx'

export const Notification = () => {
  const { message, type } = useNotificationStore()
  return (
    !!message && (
      <motion.div
        className='fixed z-50 left-0 top-0 w-full h-full flex items-center justify-center bg-[#102a27]/60'
        initial={{ opacity: 0, zoom: 1 }}
        animate={{ opacity: 1, zoom: 1.1 }}
        exit={{ opacity: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={cn(
            'rounded py-2 px-4 w-max font-semibold text-xl shadow-lg',
            {
              'bg-gradient-to-t from-red-700 to-red-500': type === 'lose',
              'bg-gradient-to-t from-green-700 to-green-500': type === 'win',
              'secondary-gradient text-white': type === 'info',
            }
          )}
        >
          {message}
        </div>
      </motion.div>
    )
  )
}
