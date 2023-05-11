import { Button } from '../button'
import './game-buy.css'

export const GameBuy = ({ game }) => {
  return(
    <div className="game-buy">
      <span className="game-buy__price">{game.price} USD</span>
      <Button
        type="primary"
        onClick={() => null}
      >
        Add to Basket
      </Button>
    </div>
  )
}