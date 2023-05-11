
import { Link } from 'react-router-dom'

import { CartBlock } from '../cart-block/cart-block'

import './header.css'

export const Header = () => {
  return(
    <header className="header">
        <div className="header__inner">
          <Link to="/" className="logo">
            GameStore
          </Link>

          <div className="header__cart">
            <CartBlock />
          </div>
        </div>
    </header>
  )
}