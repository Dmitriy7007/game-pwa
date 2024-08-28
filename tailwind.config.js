/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
import { COLORS } from './src/constants/color.constants'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { colors: COLORS },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.primary-gradient': {
          background: `linear-gradient(to top, ${COLORS.yellow[700]}, ${COLORS.yellow[300]})}`,
        },
        '.secondary-gradient': {
          background: `linear-gradient(to top, ${COLORS.brown[700]}, ${COLORS.brown[300]})}`,
        },
        '.gray-gradient': {
          background: `linear-gradient(to top, ${COLORS.gray[500]}, ${COLORS.gray[300]})}`,
        },
      })
    }),
  ],
}
