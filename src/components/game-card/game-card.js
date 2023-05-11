import { GameGenre } from '../game-genre'
import { GameCover } from '../game-cover'
import { GameBuy } from '../game-buy'

import './game-card.css'

export const GameCard = (props) => {
  return(
    <div className="game-card">
      <GameCover image={props} />

      <div className="game-card__details">
        <div className="game-card__title">{props.title}</div>
        <div className="game-card__genres">
          {props.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="game-card__buy">
          <GameBuy game={props} />
        </div>
      </div>
    </div>
  )
}