import './cart-item.css'

export const CartItem = ({title, price, id}) => {
  return(
    <div className="cart-item">
      <h3 className="cart-item__title">{title}</h3>
      <div className="cart-item__price">
        <span>{price} USD</span>
      </div>
    </div>
  )
}