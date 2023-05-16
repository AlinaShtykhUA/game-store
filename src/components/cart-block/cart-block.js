import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";

import { useSelector } from "react-redux";

import { CartMenu } from "../cart-menu";
import './cart-block.css'

export const CartBlock = () => {
  const items = useSelector(state => state.cart.itemsInCart)
  
  const totalPrice = items.reduce((acc, game) => acc += game.price, 0)
  return(
    <div className="cart-block">
      <RiShoppingCartLine className="cart-block__icon" size={28}/>
      <span className="cart-block__total-price">{totalPrice} USD</span>
      <CartMenu />
    </div>
  )
}

