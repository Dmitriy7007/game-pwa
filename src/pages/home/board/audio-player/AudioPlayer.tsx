import { Button } from '@/components/ui/button/Button'
import { Pause, Play } from 'lucide-react'
import { useRef, useState } from 'react'

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const handlePlayPause = () => {
    if (!audioRef.current) return null
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }
  return (
    <Button
      variant='gray'
      isCircle
      onClick={handlePlayPause}
      className='absolute bottom-20 right-9 z-10'
    >
      <audio ref={audioRef} loop>
        <source src='/assets/music/Track_2.mp3' type='audio/mp3' />
        Твой браузер не поддерживает аудио
      </audio>
      {isPlaying ? <Pause /> : <Play />}
    </Button>
  )
}
