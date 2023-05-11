import { GameCard } from '../../components/game-card/game-card'
import './home-page.css'
import { GAMES } from './gamesData'

export const HomePage = () => {
  const cardElement = GAMES.map(game => {
    return <GameCard key={game.id} {...game} />
  })

  return(
    <div className="home-page">
      {cardElement}
    </div>
  )
}