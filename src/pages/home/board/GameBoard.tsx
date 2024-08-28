import { useGameStore } from '@/store/game/game.store'
import { PlayerInfo } from './player-info/PlayerInfo'
import { HandCard } from './hand-card/HandCard'
import { GridBoardCards } from './board-card/GridBoardCards'
import { PlayerMana } from './player-info/mana/PlayerMana'
import { MAX_MANA } from '@/constants/game/core.constants'
import { AudioPlayer } from './audio-player/AudioPlayer'
import { EndTurnButton } from './EndTurnButton'
import { SectionSide } from './SectionSide'

export const GameBoard = () => {
  const { player, opponent, playCard } = useGameStore()

  return (
    <div className='relative w-full h-screen'>
      <SectionSide isPlayer={false}>
        <div>
          <PlayerInfo player={opponent} typePlayer='opponent' />

          <div className='-top-10 absolute w-full'>
            <div className='flex items-center justify-center'>
              {opponent.deck
                .filter(card => card.isOnHand)
                .map((card, index, array) => (
                  <HandCard
                    arrayLength={array.length}
                    index={index}
                    card={card}
                    isHided
                    key={card.id}
                  />
                ))}
            </div>
          </div>
        </div>

        <GridBoardCards deck={opponent.deck} isPlayerSide={false} />
      </SectionSide>

      <div
        className='absolute left-0 w-full'
        style={{ top: 'calc(50vh - 0.5px)' }}
      >
        <hr className='border border-yellow-500 opacity-60 w-11/12' />
        <EndTurnButton />
      </div>

      <SectionSide isPlayer>
        <GridBoardCards deck={player.deck} isPlayerSide />

        <PlayerInfo player={player} typePlayer='player' />
        <PlayerMana currentMana={player.mana} maxMana={MAX_MANA} />

        <AudioPlayer />

        <div className='-bottom-10 absolute w-full'>
          <div className='flex items-center justify-center'>
            {player.deck
              .filter(card => card.isOnHand)
              .map((card, index, array) => (
                <HandCard
                  arrayLength={array.length}
                  index={index}
                  card={card}
                  onClick={() => playCard(card.id)}
                  key={card.id}
                  isDisabled={player.mana < card.mana}
                />
              ))}
          </div>
        </div>
      </SectionSide>
    </div>
  )
}
