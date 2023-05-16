import { useDispatch } from 'react-redux'

import {setItemInCart} from '../../redux/cart/reducer'

import { Button } from '../button'
import './game-buy.css'

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch()
  const hundleClick = (event) => {
    event.stopPropagation()

    dispatch(setItemInCart(game))
  }
  return(
    <div className="game-buy">
      <span className="game-buy__price">{game.price} USD</span>
      <Button
        type="primary"
        onClick={hundleClick}
      >
        Add to Basket
      </Button>
    </div>
  )
}