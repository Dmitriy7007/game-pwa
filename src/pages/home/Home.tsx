import { useGameStore } from '@/store/game/game.store'
import { WelcomeScreen } from './WelcomeScreen'
import { GameBoard } from './board/GameBoard'
import { Notification } from '@/components/ui/notification/Notification'

function Home() {
  const { isGameStarted } = useGameStore()

  return (
    <main>
      <Notification />
      {isGameStarted ? <GameBoard /> : <WelcomeScreen />}
    </main>
  )
}

export default Home
