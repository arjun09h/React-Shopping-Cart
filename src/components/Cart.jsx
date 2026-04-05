import CartItem from "./CartItem.jsx"
function Cart({ cart, total, onUpdateQuantity, onRemove }) {
  if (cart.length === 0) {
    return (
      <div className="cart empty">
        Your Cart Is Empty
      </div>
    )
  }
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-body">
        {cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
          />
        ))}
      </div>
      <div className="cart-footer">
        <div className="cart-total">
          <h3>Total : ${typeof total === 'string' ? total : total.toFixed(2)}</h3>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>

  )
}

export default Cart;
