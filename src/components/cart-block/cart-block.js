import { RiShoppingCartLine } from "react-icons/ri";

import './cart-block.css'

export const CartBlock = () => {
  return(
    <div className="cart-block">
      <RiShoppingCartLine className="cart-block__icon" size={28}/>
      <span className="cart-block__total-price">60 USD</span>
    </div>
  )
}

